import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {TextInputProps} from 'react-native';
import {TextInputBox, TextInput} from './styles';
import {IconProps} from 'react-native-vector-icons/Icon';

interface Props {
  textInput: TextInputProps;
  icon?: IconProps;
}

const TextBox: React.FC<Props> = ({textInput, icon}, props) => (
  <TextInputBox>
    <TextInput {...props} {...textInput} />
    {icon && <Icon {...icon} />}
  </TextInputBox>
);

export default TextBox;
