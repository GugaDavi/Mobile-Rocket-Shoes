import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Animated } from 'react-native';

import api from '../../services/api';

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

export default class Home extends Component {
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

    try {
      const response = await api.get('/products');
      console.tron.log(response);
      this.setState({ products: response.data });
    } catch (error) {
      console.tron.log(error);
    }
  }

  stopAnimation = e => {
    this.setState({ animations: false });
  };

  render() {
    const { arrow, animations, products } = this.state;

    return (
      <Container>
        <Products onScrollEndDrag={this.stopAnimation}>
          <ViewProduct>
            <ViewImage />
            <Infos>
              <Description>Tenis Bacana</Description>
              <Value>R$ 200,00</Value>
            </Infos>
            <AddToCart>
              <Cart>
                <Icon name="cart-plus" size={20} color="#fff" />
                <Amount color="#fff">0</Amount>
              </Cart>
              <Action>ADICIONAR</Action>
            </AddToCart>
          </ViewProduct>
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
