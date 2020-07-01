import React, { useContext } from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { ThemeContext } from 'styled-components';

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
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Button {...rest}>
      {loading ? (
        <ActivityIndicator color={theme.colors.textOnPrimary} />
      ) : (
        <>
          <ButtonText>{children}</ButtonText>
          {icon ? (
            <Icon name={icon} color={theme.colors.textOnPrimary} size={26} />
          ) : null}
        </>
      )}
    </Button>
  );
};

export default ActionButton;
