import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconProps} from 'react-native-vector-icons/Icon';
import {TouchableOpacityProps} from 'react-native';

import {IconButtonContainer} from './styles';

type IconButtonProps = IconProps & TouchableOpacityProps;

const IconButton: React.FC<IconButtonProps> = ({
  name,
  color,
  size,
  onPress,
  ...rest
}) => {
  return (
    <IconButtonContainer onPress={onPress} {...rest}>
      <Icon name={name} color={color} size={size} />
    </IconButtonContainer>
  );
};

export default IconButton;
