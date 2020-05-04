import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacityProps
} from 'react-native';

import {
  TouchableOpacity,
  TileButtonText,
  TileButtonImageArea
} from './styles';

interface TileButtonProps extends TouchableOpacityProps {
  icon: ImageSourcePropType;
  children: string;
}

const TileButton: React.FC<TileButtonProps> = ({ icon, children, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <TileButtonImageArea>
        <Image source={icon} />
      </TileButtonImageArea>
      <TileButtonText>{children}</TileButtonText>
    </TouchableOpacity>
  );
};

export default TileButton;
