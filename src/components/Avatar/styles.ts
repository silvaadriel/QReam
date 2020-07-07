import styled from 'styled-components/native';

export const AvatarContainer = styled.TouchableOpacity``;

export const AvatarImage = styled.Image`
  height: 95px;
  width: 95px;
  border-radius: 95px;
`;

export const CameraIconContainer = styled.View`
  position: absolute;
  right: 2px;
  bottom: 2px;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  background: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;
