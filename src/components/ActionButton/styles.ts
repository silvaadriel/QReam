import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Button = styled.TouchableOpacity`
  height: 50px;
  margin-top: 28px;
  border-radius: 5px;
  background: #2699da;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(MaterialIcon)`
  margin-left: 10px;
`;
