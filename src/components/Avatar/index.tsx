import React, { useContext } from 'react';
import { TouchableOpacityProperties } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from 'styled-components';

import { AvatarContainer, AvatarImage, CameraIconContainer } from './styles';

interface AvatarProps extends TouchableOpacityProperties {
  avatarUri?: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatarUri, ...rest }) => {
  const theme = useContext(ThemeContext);

  return (
    <AvatarContainer {...rest}>
      {avatarUri ? (
        <AvatarImage
          source={{
            uri: avatarUri,
          }}
        />
      ) : (
        <Icon
          name="account-circle"
          color={theme.colors.textOnSecundary}
          size={95}
        />
      )}
      <CameraIconContainer>
        <Icon name="camera-alt" color={theme.colors.textOnPrimary} size={20} />
      </CameraIconContainer>
    </AvatarContainer>
  );
};

export default Avatar;
