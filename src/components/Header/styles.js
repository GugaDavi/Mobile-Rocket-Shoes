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
