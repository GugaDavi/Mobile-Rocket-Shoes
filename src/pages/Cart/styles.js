import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import tenis from '../../images/tenis.png';

export const Container = styled.View`
  padding: 10px 15px;
`;

export const ViewCart = styled.View`
  width: 100%;
  max-width: 500px;
  background: #fff;
  padding: 10px 15px;
  border-radius: 5px;
`;
export const InfosProduct = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ImageProduct = styled.Image.attrs({
  source: tenis,
})`
  height: 100px;
  width: 100px;
  margin-right: 20px;
`;
export const Infos = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
export const Description = styled.Text.attrs({})`
  font-size: 16px;
`;
export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const AmountProduct = styled.View`
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;
export const Quantitaty = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Amount = styled.TextInput.attrs({
  editable: false,
})`
  background-color: #fff;
  width: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0px 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
export const Total = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const InfosCart = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const Totals = styled.View`
  align-items: center;
`;
export const TextTotal = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const ValueTotal = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
export const ClosedCart = styled(RectButton)`
  width: 100%;
  height: 40px;
  background: #7159c1;
  border-radius: 5px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const ClosedCartText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
`;
