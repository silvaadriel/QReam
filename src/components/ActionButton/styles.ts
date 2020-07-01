import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Button = styled.TouchableOpacity`
  height: 50px;
  margin-top: 28px;
  border-radius: 5px;
  background: ${props => props.theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;

  opacity: ${prop => (prop.disabled ? 0.5 : 1)};
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.textOnPrimary};
  font-size: 20px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(MaterialIcon)`
  margin-left: 10px;
`;
