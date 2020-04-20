import styled from 'styled-components/native';

export const User = styled.View`
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.Text`
  color: #e5e7e8;
  font-size: 23px;
  margin-top: 30px;
`;

export const ButtonGroup = styled.View`
  margin: 60px 30px;
`;

export const Button = styled.TouchableOpacity`
  height: 67px;
  background: #36384d;
  border-top-width: 2px;
  border-top-color: #2699da;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #bebebf;
  text-align: center;
  font-size: 20px;
`;

export const Title = styled.Text`
  color: #dadada;
  font-size: 26px;
  text-align: center;
`;

export const InputValueContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 80px;
`;

export const InputValueCurrency = styled.Text`
  color: #dadada;
  font-size: 16px;
`;

export const InputValue = styled.TextInput`
  flex: 1;
  color: #dfdfdf;
  font-size: 64px;
  text-align: center;
  letter-spacing: -0.5px;
  border-bottom-width: 2px;
  border-bottom-color: #2699da;
`;

export const Footer = styled.View`
  margin: 0 55px;
  margin-bottom: 60px;
`;
