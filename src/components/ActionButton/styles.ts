import styled from 'styled-components/native';

interface OwnProps {
  iconMargin: string | undefined;
}

type Props = OwnProps;

export const Button = styled.TouchableOpacity`
  height: 50px;
  margin-top: 28px;
  border-radius: 5px;
  background: #2699da;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<Props>`
  color: #ffffff;
  font-size: 20px;
  margin-right: ${({iconMargin}) => (iconMargin ? 10 : 0)}px;
`;
