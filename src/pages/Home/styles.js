import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';
import { Animated } from 'react-native';

export const Container = styled.View`
  padding: 20px;
`;
export const Products = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-bottom: 20px;
`;
export const Indicator = styled(Animated.View)`
  margin-right: 30px;
  align-items: flex-end;
`;
export const ViewProduct = styled.View`
  padding: 20px;
  margin-right: 20px;
  background: #fff;
  border-radius: 5px;
  width: 320px;
`;
export const ViewImage = styled.Image`
  width: 260px;
  height: 260px;
`;
export const Infos = styled.View`
  text-align: right;
  margin-bottom: 5px;
`;
export const Description = styled.Text`
  color: #333;
  font-size: 16px;
`;
export const Value = styled.Text`
  font-size: 21px;
  color: #000;
  font-weight: bold;
`;

export const AddToCart = styled(RectButton)`
  flex-direction: row;
  margin-top: auto;
  align-items: center;
  background: #7159c1;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
`;

export const Action = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const Cart = styled.View`
  width: 70px;
  padding: 15px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background: ${darken(0.05, '#7159c1')};
`;

export const Amount = styled.Text`
  color: #fff;
  font-weight: bold;
`;
