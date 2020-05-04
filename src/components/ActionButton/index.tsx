import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Button, ButtonText, Icon } from './styles';

interface ActionButtonProps extends TouchableOpacityProps {
  children: string;
  icon?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  icon,
  ...rest
}) => (
  <Button {...rest}>
    <ButtonText>{children}</ButtonText>
    {icon ? <Icon name={icon} color="#ffffff" size={26} /> : null}
  </Button>
);

export default ActionButton;
