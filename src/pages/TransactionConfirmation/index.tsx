import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../Router';

import ContainerFluid from '../../components/ContainerFluid';
import ActionButton from '../../components/ActionButton';

import {
  Footer,
  Title,
  TransactionInformation,
  TransactionInformationContainer,
  TransactionInformationKey,
  TransactionInformationValue
} from './styles';

type ShowQRCodeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TransactionConfirmation'
>;

type Props = {
  navigation: ShowQRCodeNavigationProp;
};

const TransactionConfirmation: React.FC<Props> = ({navigation}) => (
  <ContainerFluid>
    <Title>Pagamento recebido com sucesso!</Title>
    <TransactionInformationContainer>
      <TransactionInformation>
        <TransactionInformationKey>pago por</TransactionInformationKey>
        <TransactionInformationValue>
          Carlos Pereira
        </TransactionInformationValue>
      </TransactionInformation>
      <TransactionInformation>
        <TransactionInformationKey>data</TransactionInformationKey>
        <TransactionInformationValue>08/01/2020</TransactionInformationValue>
      </TransactionInformation>
      <TransactionInformation>
        <TransactionInformationKey>valor</TransactionInformationKey>
        <TransactionInformationValue>R$ 50,00</TransactionInformationValue>
      </TransactionInformation>
    </TransactionInformationContainer>

    <Footer>
      <ActionButton
        onPress={() => navigation.navigate('ScanQRCode')}
        label="Ok!"
      />
    </Footer>
  </ContainerFluid>
);

export default TransactionConfirmation;
