import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Button, ButtonText} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface OwnProps {
  label: string;
  icon?: string;
}

type Props = OwnProps & TouchableOpacityProps;

const ActionButton: React.FC<Props> = ({label, icon, ...props}) => (
  <Button {...props}>
    <ButtonText iconMargin={icon}>{label}</ButtonText>
    {icon && <Icon name={icon} color="#ffffff" size={26} />}
  </Button>
);

export default ActionButton;
