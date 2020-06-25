import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import QRCodeCamScanner from 'react-native-qrcode-scanner';

export const Container = styled.SafeAreaView`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

export const Text = styled.Text`
  color: #dadada;
  font-size: 20px;
  text-align: center;
  margin: 0 28px;
  font-family: 'Roboto-Regular';
`;

export const QRCodeScanner = styled(QRCodeCamScanner).attrs({
  cameraStyle: {
    height: Dimensions.get('window').height,
  },
})``;
