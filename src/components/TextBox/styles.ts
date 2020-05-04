import styled, { css } from 'styled-components/native';

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
  border-bottom-color: #dadada50;

  ${(props) =>
    (props.isFocused || props.isFilled) &&
    css`
      border-bottom-color: #2699da;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #dfdfdf;
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.5px;
  font-family: 'Roboto-Light';
`;
