import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${props => props.theme.colors.textOnSecundary};
  font-size: 26px;
  text-align: center;
  font-family: 'Roboto-Light';
`;

export const InputValueContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 80px;
`;

export const InputValueCurrency = styled.Text`
  color: ${props => props.theme.colors.textOnSecundary};
  font-size: 16px;
  font-family: 'Roboto-Light';
`;

export const InputValue = styled.TextInput`
  flex: 1;
  color: ${props => props.theme.colors.textOnSecundary};
  font-size: 64px;
  text-align: center;
  letter-spacing: -0.5px;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.colors.primary};
  font-family: 'Roboto-Regular';
`;

export const Footer = styled.View`
  margin: 0 55px;
  margin-bottom: 60px;
`;
