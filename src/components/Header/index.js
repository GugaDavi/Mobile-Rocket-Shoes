import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Logo, AmountInCart } from './styles';

class Header extends React.Component {
  state = {};

  handleNavigate = route => {
    const { navigation } = this.props;

    navigation.navigate(route);
  };

  render() {
    return (
      <Container>
        <Logo onPress={() => this.handleNavigate('Home')} />
        <View>
          <Icon
            name="cart-outline"
            color="#fff"
            size={30}
            onPress={() => this.handleNavigate('Cart')}
          />
          <AmountInCart>5</AmountInCart>
        </View>
      </Container>
    );
  }
}

export default Header;
