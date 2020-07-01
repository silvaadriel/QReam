import styled from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`
  width: 160px;
  height: 180px;
  margin: 0 6px;
  background: ${props => props.theme.colors.secundary};
  border-top-width: 2px;
  border-top-color: ${props => props.theme.colors.primary};
  align-items: center;
`;

export const TileButtonImageArea = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const TileButtonText = styled.Text`
  flex: 1;
  color: ${props => props.theme.colors.textOnSecundary};
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto-Regular';
`;
