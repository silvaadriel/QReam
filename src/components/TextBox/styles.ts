import styled, { css } from 'styled-components/native';
import { transparentize } from 'polished';

interface TextInputBoxProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const TextInputBox = styled.View<TextInputBoxProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom-width: 2px;
  border-bottom-color: ${props =>
    transparentize(0.6, props.theme.colors.primary)};
  ${props =>
    (props.isFocused || props.isFilled) &&
    css`
      border-bottom-color: ${props.theme.colors.primary};
    `};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${props => props.theme.colors.textOnSecundary};
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.5px;
  font-family: 'Roboto-Light';
`;
