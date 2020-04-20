import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Text = styled.Text`
  color: #dadada;
  font-size: 20px;
  text-align: center;
  margin: 0 28px;
`;

export const QRCodeCamMask = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

export const QRCodeCamMaskRow = styled.View`
  flex: 1;
  background: #00000080;
`;

export const QRCodeCamMaskRowFrame = styled.View`
  flex: 2;
  flex-direction: row;
`;

export const QRCodeCamMaskColumn = styled.View`
  flex: 1;
  background: #00000080;
`;

export const QRCodeCamMaskColumnFrame = styled.View`
  flex: 8;
`;

export const QRCodeCamMaskFrame = styled.View`
  flex: 1;
  background: transparent;
`;
