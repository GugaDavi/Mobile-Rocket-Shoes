import styled from 'styled-components/native';

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
`;
export const Description = styled.Text`
  font-size: 18px;
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
