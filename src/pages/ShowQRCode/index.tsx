import React, { useContext } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { transparentize } from 'polished';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';
import ActionButton from '../../components/ActionButton';
import IconButton from '../../components/IconButton';

import QRCode from '../../assets/QRCode.png';

import { Title, Text, Footer, QRCodeContainer } from './styles';

const ShowQRCode: React.FC = () => {
  const navigation = useNavigation();

  const theme = useContext(ThemeContext);

  return (
    <ContainerFluid>
      <Header style={{ alignItems: 'flex-end' }}>
        <IconButton
          onPress={() => navigation.navigate('Home')}
          icon="close"
          iconColor={transparentize(0.5, theme.colors.textOnSecundary)}
          iconSize={48}
        />
      </Header>

      <Title>Meu código QR</Title>

      <Text>Mostre este QR Code para realizar um pagamento</Text>

      <QRCodeContainer>
        <Image source={QRCode} />
      </QRCodeContainer>

      <Footer>
        <ActionButton icon="share">Compartilhar</ActionButton>
      </Footer>
    </ContainerFluid>
  );
};

export default ShowQRCode;
