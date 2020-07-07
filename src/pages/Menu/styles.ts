import styled from 'styled-components/native';
import { shade } from 'polished';

export const User = styled.View`
  align-items: center;
  justify-content: center;
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

export const ModalContainer = styled.View`
  height: 400px;
  border-top-width: 2px;
  border-top-color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.secundary};
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: ${props => shade(0.05, props.theme.colors.secundary)};
  padding: 20px;
`;

export const ModalTitle = styled.Text`
  color: ${props => props.theme.colors.textOnSecundary};
  font-size: 25px;
  font-family: 'Roboto-Regular';
`;

export const ThemeSwitcherContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => shade(0.05, props.theme.colors.secundary)};
`;

export const ThemeSwitcherText = styled.Text`
  color: ${props => props.theme.colors.textOnSecundary};
  font-size: 20px;
  font-family: 'Roboto-Regular';
`;
