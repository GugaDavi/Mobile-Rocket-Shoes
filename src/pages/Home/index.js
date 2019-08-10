import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Animated } from 'react-native';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ViewProduct,
  ViewImage,
  Description,
  Infos,
  Value,
  AddToCart,
  Action,
  Cart,
  Amount,
  Products,
  Indicator,
} from './styles';

export default function Home() {
  const [animations, setAnimations] = useState(true);
  const [arrow] = useState(new Animated.Value(0));
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((sum, product) => {
      sum[product.id] = product.amount;

      return sum;
    }, {})
  );

  useEffect(() => {
    function StartAnimations() {
      Animated.loop(
        Animated.sequence([
          Animated.timing(arrow, {
            duration: 1000,
            toValue: 30,
          }),

          Animated.delay(200),
        ]),
        {
          interations: Infinity,
        }
      ).start();
    }

    async function loadingProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    StartAnimations();
    loadingProducts();
  }, []);

  function stopAnimation() {
    setAnimations(false);
  }

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <Products onScrollEndDrag={stopAnimation}>
        {products.map(product => (
          <ViewProduct key={product.id}>
            <ViewImage source={{ uri: product.image }} />
            <Infos>
              <Description>{product.title}</Description>
              <Value>{product.priceFormatted}</Value>
            </Infos>
            <AddToCart onPress={() => handleAddProduct(product.id)}>
              <Cart>
                <Icon name="cart-plus" size={20} color="#fff" />
                <Amount color="#fff">{amount[product.id] || 0}</Amount>
              </Cart>
              <Action>ADICIONAR</Action>
            </AddToCart>
          </ViewProduct>
        ))}
      </Products>

      {animations ? (
        <Indicator
          style={{
            left: arrow,
            opacity: arrow.interpolate({
              inputRange: [0, 25, 30],
              outputRange: [0.2, 1, 0],
            }),
          }}
        >
          <Icon name="arrow-right" size={40} color="#FFF" />
        </Indicator>
      ) : null}
    </Container>
  );
}
