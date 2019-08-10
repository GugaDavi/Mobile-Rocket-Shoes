import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Logo, AmountInCart, ActionLogo } from './styles';

export default function Header({ navigation }) {
  function handleNavigate(route) {
    navigation.navigate(route);
  }

  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <ActionLogo onPress={() => handleNavigate('Home')}>
        <Logo />
      </ActionLogo>
      <View>
        <Icon
          name="cart-outline"
          color="#fff"
          size={30}
          onPress={() => handleNavigate('Cart')}
        />
        <AmountInCart>{cartSize}</AmountInCart>
      </View>
    </Container>
  );
}
