import React from 'react';
import { View, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

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
} from './styles';

export default function Cart() {
  return (
    <Container>
      <ScrollView>
        <ViewCart>
          <View>
            <InfosProduct>
              <Infos>
                <ImageProduct />
                <View>
                  <Description>Tenes Bacana</Description>
                  <Price>R$ 200,00</Price>
                </View>
              </Infos>
              <Icon name="delete" color="#7159c1" size={30} />
            </InfosProduct>
            <AmountProduct>
              <Quantitaty>
                <Icon2 name="remove-circle-outline" color="#7159c1" size={20} />
                <Amount value="3" />
                <Icon2 name="add-circle-outline" color="#7159c1" size={20} />
              </Quantitaty>
              <Total>R$ 200,00</Total>
            </AmountProduct>
          </View>
          <View>
            <InfosProduct>
              <Infos>
                <ImageProduct />
                <View>
                  <Description>Tenes Bacana</Description>
                  <Price>R$ 200,00</Price>
                </View>
              </Infos>
              <Icon name="delete" color="#7159c1" size={30} />
            </InfosProduct>
            <AmountProduct>
              <Quantitaty>
                <Icon2 name="remove-circle-outline" color="#7159c1" size={20} />
                <Amount value="3" />
                <Icon2 name="add-circle-outline" color="#7159c1" size={20} />
              </Quantitaty>
              <Total>R$ 200,00</Total>
            </AmountProduct>
          </View>
        </ViewCart>
      </ScrollView>
    </Container>
  );
}
