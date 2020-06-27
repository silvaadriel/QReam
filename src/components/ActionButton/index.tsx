import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';

import { Button, ButtonText, Icon } from './styles';

interface ActionButtonProps extends TouchableOpacityProps {
  children: string;
  icon?: string;
  loading?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  icon,
  loading,
  ...rest
}) => (
  <Button {...rest}>
    {loading ? (
      <ActivityIndicator color="#ffffff" />
    ) : (
      <>
        <ButtonText>{children}</ButtonText>
        {icon ? <Icon name={icon} color="#ffffff" size={26} /> : null}
      </>
    )}
  </Button>
);

export default ActionButton;
