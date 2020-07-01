import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-bottom: 50px;
`;

export const LogoContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Animated.Image)``;

export const LoginForm = styled(Animated.View)`
  flex: 2;
  margin: 0 60px;
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

export const SignUpText = styled.Text`
  color: ${props => props.theme.colors.textOnSecundary};
  font-size: 16px;
  font-family: 'Roboto-Light';
`;
