import React from 'react';
import {Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../Router';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';
import ActionButton from '../../components/ActionButton';
import IconButton from '../../components/IconButton';

import QRCode from '../../assets/QRCode.png';

import {Title, Text, Footer, QRCodeContainer} from './styles';

type ShowQRCodeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ShowQRCode'
>;

type Props = {
  navigation: ShowQRCodeNavigationProp;
};

const ShowQRCode: React.FC<Props> = ({navigation}) => (
  <ContainerFluid>
    <Header style={{alignItems: 'flex-end'}}>
      <IconButton
        onPress={() => navigation.navigate('Home')}
        name="close"
        color="#DADADA70"
        size={48}
      />
    </Header>
    <Title>Meu código QR</Title>
    <Text>Mostre este QR Code para realizar um pagamento</Text>
    <QRCodeContainer>
      <Image source={QRCode} />
    </QRCodeContainer>
    <Footer>
      <ActionButton label="Compartilhar" icon="share" />
    </Footer>
  </ContainerFluid>
);

export default ShowQRCode;
