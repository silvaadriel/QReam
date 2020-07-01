import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${props => props.theme.colors.textOnSecundary};
  font-size: 26px;
  text-align: center;
  font-family: 'Roboto-Light';
`;

export const InputPasswordContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 80px;
`;

export const Footer = styled.View`
  margin: 0 55px;
  margin-bottom: 60px;
`;
