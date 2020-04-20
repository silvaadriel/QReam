import React, {useRef} from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {
  PasswordInputContainer,
  TextInputHidden,
  PasswordCharacterBox,
  PasswordMaskContainer,
  Dot
} from './styles';

interface OwnProps {
  password: string;
  passwordLength: number;
}

type Props = OwnProps & TextInputProps;

const PasswordInput: React.FC<Props> = ({
  password,
  passwordLength,
  onChangeText,
  ...props
}) => {
  const textInputHidden = useRef<TextInput>(null);

  const focusTextInputHidden = () => {
    textInputHidden.current?.blur();
    textInputHidden.current?.focus();
  };

  const renderMask = (password: string) => {
    const passwordCharacterBox = [];
    for (let i = 1; i <= passwordLength; i++) {
      passwordCharacterBox.push(
        <PasswordCharacterBox key={i}>
          {password.length >= i && <Dot />}
        </PasswordCharacterBox>
      );
    }

    return passwordCharacterBox;
  };

  return (
    <PasswordInputContainer onTouchStart={focusTextInputHidden}>
      <TextInputHidden
        autoFocus
        caretHidden
        keyboardType="number-pad"
        maxLength={passwordLength}
        ref={textInputHidden}
        value={password}
        onChangeText={onChangeText}
        {...props}
      />
      <PasswordMaskContainer>{renderMask(password)}</PasswordMaskContainer>
    </PasswordInputContainer>
  );
};

export default PasswordInput;
