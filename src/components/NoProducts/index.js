import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, ViewCart, InfoCart } from './styles';

export default function NoProducts() {
  return (
    <Container>
      <ViewCart>
        <Icon name="remove-shopping-cart" color="#eee" size={100} />
        <InfoCart>Seu Carrinho está Vazio</InfoCart>
      </ViewCart>
    </Container>
  );
}
