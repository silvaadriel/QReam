import React from 'react';
import {Image, ImageSourcePropType, TouchableOpacityProps} from 'react-native';

import {TouchableOpacity, TileButtonText, TileButtonImageArea} from './styles';

interface OwnProps {
  icon: ImageSourcePropType;
  label: string;
}

type Props = OwnProps & TouchableOpacityProps;

const TileButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity {...props}>
      <TileButtonImageArea>
        <Image source={props.icon} />
      </TileButtonImageArea>
      <TileButtonText>{props.label}</TileButtonText>
    </TouchableOpacity>
  );
};

export default TileButton;
