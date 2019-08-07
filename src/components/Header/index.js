import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Logo, AmountInCart, ActionLogo } from './styles';

class Header extends React.Component {
  state = {};

  handleNavigate = route => {
    const { navigation } = this.props;

    navigation.navigate(route);
  };

  render() {
    const { cartSize } = this.props;

    return (
      <Container>
        <ActionLogo onPress={() => this.handleNavigate('Home')}>
          <Logo />
        </ActionLogo>
        <View>
          <Icon
            name="cart-outline"
            color="#fff"
            size={30}
            onPress={() => this.handleNavigate('Cart')}
          />
          <AmountInCart>{cartSize}</AmountInCart>
        </View>
      </Container>
    );
  }
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
