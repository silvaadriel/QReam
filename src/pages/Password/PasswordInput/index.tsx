import React, { useRef, useCallback } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import {
  PasswordInputContainer,
  TextInputHidden,
  PasswordCharacterBox,
  PasswordMaskContainer,
  Dot,
} from './styles';

interface PasswordInputProps extends TextInputProps {
  password: string;
  passwordLength: number;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  passwordLength,
  onChangeText,
  ...rest
}) => {
  const textInputHidden = useRef<TextInput>(null);

  const focusTextInputHidden = useCallback(() => {
    textInputHidden.current?.blur();
    textInputHidden.current?.focus();
  }, []);

  const renderMask = useCallback(
    (currentPassword: string) => {
      const passwordCharacterBox = [];
      for (let i = 1; i <= passwordLength; i + 1) {
        passwordCharacterBox.push(
          <PasswordCharacterBox key={i}>
            {currentPassword.length >= i ? <Dot /> : null}
          </PasswordCharacterBox>,
        );
      }

      return passwordCharacterBox;
    },
    [passwordLength],
  );

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
        {...rest}
      />
      <PasswordMaskContainer>{renderMask(password)}</PasswordMaskContainer>
    </PasswordInputContainer>
  );
};

export default PasswordInput;
