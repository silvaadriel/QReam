import React from 'react';
import { useNavigation } from '@react-navigation/native';

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

const TransactionConfirmation: React.FC = () => {
  const navigation = useNavigation();

  return (
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
        <ActionButton onPress={() => navigation.navigate('Home')}>
          Ok!
        </ActionButton>
      </Footer>
    </ContainerFluid>
  );
};

export default TransactionConfirmation;
