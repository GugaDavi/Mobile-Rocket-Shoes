import styled from 'styled-components/native';

import logo from '../../images/Logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 200px;
  height: 25px;
`;

export const AmountInCart = styled.Text`
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  width: 25px;
  height: 25px;
  color: #fff;
  background: #7159c1;
  padding: 5px;
  border-radius: 17.5px;
  right: -10px;
  top: -10px;
`;
