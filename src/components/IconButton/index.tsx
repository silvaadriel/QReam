import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacityProps } from 'react-native';

import { IconButtonContainer } from './styles';

interface IconButtonProps extends TouchableOpacityProps {
  icon: string;
  iconColor: string;
  iconSize: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconColor,
  iconSize,
  ...rest
}) => {
  return (
    <IconButtonContainer {...rest}>
      <Icon name={icon} color={iconColor} size={iconSize} />
    </IconButtonContainer>
  );
};

export default IconButton;
