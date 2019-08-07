import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

class Home extends Component {
  state = {
    animations: true,
    arrow: new Animated.Value(0),
    products: [],
  };

  async componentDidMount() {
    const { arrow } = this.state;

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

    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  stopAnimation = () => {
    this.setState({ animations: false });
  };

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { arrow, animations, products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <Products onScrollEndDrag={this.stopAnimation}>
          {products.map(product => (
            <ViewProduct key={product.id}>
              <ViewImage source={{ uri: product.image }} />
              <Infos>
                <Description>{product.title}</Description>
                <Value>{product.priceFormatted}</Value>
              </Infos>
              <AddToCart onPress={() => this.handleAddProduct(product.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
