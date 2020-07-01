import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${props => props.theme.colors.textOnSecundary};
  font-size: 26px;
  text-align: center;
  font-family: 'Roboto-Light';
`;

export const Text = styled.Text`
  color: ${props => props.theme.colors.textOnSecundary};
  font-size: 18px;
  text-align: center;
  margin: 50px 70px;
  font-family: 'Roboto-Light';
`;

export const QRCodeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  margin: 0 55px;
  margin-bottom: 60px;
`;
