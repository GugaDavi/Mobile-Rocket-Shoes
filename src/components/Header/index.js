import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Logo } from './styles';

import Cart from '../../pages/Cart';

class Header extends React.Component {
  state = {};

  handleNavigate = route => {
    const { navigation } = this.props;

    navigation.navigate(route);
  };

  render() {
    return (
      <Container>
        <Logo />
        <Icon
          name="cart-outline"
          color="#fff"
          size={24}
          onPress={() => this.handleNavigate('Cart')}
        />
      </Container>
    );
  }
}

export default Header;
