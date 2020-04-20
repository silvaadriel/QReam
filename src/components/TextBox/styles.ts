import styled from 'styled-components/native';

export const TextInputBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom-width: 2px;
  border-bottom-color: #2699da;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#DFDFDF'
})`
  flex: 1;
  color: #dfdfdf;
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.5px;
`;
