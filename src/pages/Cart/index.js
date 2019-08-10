import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import NoProducts from '../../components/NoProducts';

import {
  Container,
  ViewCart,
  InfosProduct,
  ImageProduct,
  Infos,
  Description,
  Price,
  AmountProduct,
  Quantitaty,
  Amount,
  Total,
  InfosCart,
  Totals,
  TextTotal,
  ValueTotal,
  ClosedCart,
  ClosedCartText,
} from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sum, product) => {
        return sum + product.price * product.amount;
      }, 0)
    )
  );

  function editAmount(id, addOrSub) {
    dispatch(CartActions.updateAmountRequest(id, addOrSub));
  }

  console.tron.log(Number(total));

  return (
    <Container>
      <ScrollView>
        {total > 'R$0,00' ? (
          <ViewCart>
            {cart.map(product => (
              <View key={product.id}>
                <InfosProduct>
                  <ImageProduct source={{ uri: product.image }} />
                  <Infos>
                    <View>
                      <Description>{product.title}</Description>
                      <Price>{product.priceFormatted}</Price>
                    </View>
                  </Infos>
                  <Icon
                    name="delete"
                    color="#7159c1"
                    size={30}
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  />
                </InfosProduct>
                <AmountProduct>
                  <Quantitaty>
                    <Icon2
                      name="remove-circle-outline"
                      color="#7159c1"
                      size={20}
                      onPress={() => editAmount(product.id, false)}
                    />
                    <Amount value={String(product.amount)} />
                    <Icon2
                      name="add-circle-outline"
                      color="#7159c1"
                      size={20}
                      onPress={() => editAmount(product.id, true)}
                    />
                  </Quantitaty>
                  <Total>{product.subTotal}</Total>
                </AmountProduct>
              </View>
            ))}
            <InfosCart>
              <Totals>
                <TextTotal>Total</TextTotal>
                <ValueTotal>{total}</ValueTotal>
              </Totals>
              <ClosedCart>
                <ClosedCartText>Finalizar Pedido</ClosedCartText>
              </ClosedCart>
            </InfosCart>
          </ViewCart>
        ) : (
          <NoProducts />
        )}
      </ScrollView>
    </Container>
  );
}
