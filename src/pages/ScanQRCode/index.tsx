import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../Router';

import Header from '../../components/Header';
import IconButton from '../../components/IconButton';

import {
  Container,
  QRCodeCamMask,
  QRCodeCamMaskColumn,
  QRCodeCamMaskColumnFrame,
  QRCodeCamMaskFrame,
  QRCodeCamMaskRow,
  QRCodeCamMaskRowFrame,
  Text
} from './styles';

type ShowQRCodeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ScanQRCode'
>;

type Props = {
  navigation: ShowQRCodeNavigationProp;
};

const ShowQRCode: React.FC<Props> = ({navigation}) => (
  <Container>
    <Header>
      <IconButton
        onPress={() => navigation.goBack()}
        name="keyboard-arrow-left"
        color="#DADADA70"
        size={48}
      />
    </Header>
    <Text>
      Aponte o celular, escaneie o código QR e aguarde a confirmação de leitura
    </Text>
    <QRCodeCamMask>
      <QRCodeCamMaskRow />
      <QRCodeCamMaskRowFrame>
        <QRCodeCamMaskColumn />
        <QRCodeCamMaskColumnFrame>
          <QRCodeCamMaskFrame />
        </QRCodeCamMaskColumnFrame>
        <QRCodeCamMaskColumn />
      </QRCodeCamMaskRowFrame>
      <QRCodeCamMaskRow />
    </QRCodeCamMask>
  </Container>
);

export default ShowQRCode;
