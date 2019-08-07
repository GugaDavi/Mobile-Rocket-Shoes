import React from 'react';
import { bindActionCreators } from 'redux';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

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

function Cart({ cart, dispatch, removeFromCart, updateAmountRequest, total }) {
  function editAmount(id, addOrSub) {
    updateAmountRequest(id, addOrSub);
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
                    onPress={() => removeFromCart(product.id)}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
