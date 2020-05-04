import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import IconButton from '../../components/IconButton';
import QRCodeCamMask from './QRCodeCamMask';

import { Container, QRCodeScanner, Text } from './styles';

const ShowQRCode: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Header>
          <IconButton
            onPress={() => navigation.goBack()}
            icon="keyboard-arrow-left"
            iconColor="#DADADA70"
            iconSize={48}
          />
        </Header>

        <Text>
          Aponte o celular, escaneie o código QR e aguarde a confirmação de
          leitura
        </Text>

        <QRCodeCamMask />
      </Container>
      <View>
        <QRCodeScanner
          fadeIn={false}
          checkAndroid6Permissions={true}
          onRead={() => navigation.navigate('TransactionConfirmation')}
        />
      </View>
    </>
  );
};

export default ShowQRCode;
