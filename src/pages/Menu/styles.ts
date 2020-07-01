import styled from 'styled-components/native';
import { Animated } from 'react-native';

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
  color: ${props => props.theme.colors.textOnSecundary};
  font-size: 23px;
  margin-top: 30px;
  font-family: 'Roboto-Light';
`;

export const ButtonGroup = styled.View`
  margin: 60px 30px;
`;

export const Button = styled.TouchableOpacity`
  height: 67px;
  background: ${props => props.theme.colors.secundary};
  border-top-width: 2px;
  border-top-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.textOnSecundary};
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto-Regular';
`;

export const Preferences = styled(Animated.View)`
  width: 100%;
  height: 100%;
  position: absolute;
  border-top-width: 2px;
  border-top-color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.secundary};
  z-index: 5;
`;
