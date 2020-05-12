import styled from 'styled-components/native';

export const User = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image`
  height: 95px;
  width: 95px;
  border-radius: 95px;
`;

export const UserName = styled.Text`
  color: #e5e7e8;
  font-size: 23px;
  margin-top: 30px;
  font-family: 'Roboto-Light';
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
  font-family: 'Roboto-Regular';
`;
