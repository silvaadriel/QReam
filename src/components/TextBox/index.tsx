import React, { useState, useCallback, forwardRef, useContext } from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from 'styled-components';
import { transparentize } from 'polished';

import { TextInputBox, TextInput } from './styles';

interface TextBoxProps extends TextInputProps {
  secureTextEntry?: boolean;
}

const TextBox: React.RefForwardingComponent<RNTextInput, TextBoxProps> = (
  { secureTextEntry, ...rest },
  ref,
) => {
  const [isTextVisible, setIsTextVisible] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useContext(ThemeContext);

  const handleTextVisibility = useCallback(() => {
    setIsTextVisible(!isTextVisible);
  }, [isTextVisible]);

  return (
    <TextInputBox isFocused={isFocused} isFilled={isFilled}>
      <TextInput
        ref={ref}
        autoCorrect={secureTextEntry}
        autoCapitalize={secureTextEntry ? 'none' : 'sentences'}
        secureTextEntry={isTextVisible}
        placeholderTextColor={transparentize(0.6, theme.colors.textOnSecundary)}
        onFocus={() => setIsFocused(true)}
        onEndEditing={event => {
          setIsFocused(false);
          setIsFilled(!!event.nativeEvent.text);
        }}
        {...rest}
      />
      {secureTextEntry ? (
        <Icon
          name={isTextVisible ? 'visibility' : 'visibility-off'}
          color={
            isFocused || isFilled
              ? theme.colors.textOnSecundary
              : transparentize(0.6, theme.colors.textOnSecundary)
          }
          size={24}
          onPress={handleTextVisibility}
        />
      ) : null}
    </TextInputBox>
  );
};

export default forwardRef(TextBox);
