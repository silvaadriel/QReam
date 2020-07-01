import styled from 'styled-components/native';

export const PasswordInputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 80px;
`;

export const TextInputHidden = styled.TextInput`
  position: absolute;
  top: -10000px;
  opacity: 0;
  right: 0;
  left: 0;
  z-index: 5;
`;

export const PasswordMaskContainer = styled.View`
  height: 26px;
  flex-direction: row;
`;

export const PasswordCharacterBox = styled.View`
  width: 50px;
  align-items: center;
  margin: 0 10px;
  padding-bottom: 12px;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.colors.primary};
`;

export const Dot = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 12px;
  background: ${props => props.theme.colors.textOnSecundary};
`;
