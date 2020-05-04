import React, { useState, useCallback, forwardRef } from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TextInputBox, TextInput } from './styles';

interface TextBoxProps extends TextInputProps {
  secureTextEntry?: boolean;
}

const TextBox: React.RefForwardingComponent<RNTextInput, TextBoxProps> = (
  { secureTextEntry, ...rest },
  ref
) => {
  const [isTextVisible, setIsTextVisible] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

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
        placeholderTextColor="#DADADA50"
        onFocus={() => setIsFocused(true)}
        onEndEditing={(event) => {
          setIsFocused(false);
          setIsFilled(!!event.nativeEvent.text);
        }}
        {...rest}
      />
      {secureTextEntry ? (
        <Icon
          name={isTextVisible ? 'visibility' : 'visibility-off'}
          color="#DADADA50"
          size={24}
          onPress={handleTextVisibility}
        />
      ) : null}
    </TextInputBox>
  );
};

export default forwardRef(TextBox);
