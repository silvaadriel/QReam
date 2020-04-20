import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../../Router';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';
import ActionButton from '../../components/ActionButton';
import IconButton from '../../components/IconButton';

import {
  Footer,
  InputValue,
  InputValueContainer,
  InputValueCurrency,
  Title
} from './styles';

type ShowQRCodeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'InformValue'
>;

type ShowQRCodeNavigationRouteProp = RouteProp<
  RootStackParamList,
  'InformValue'
>;

type Props = {
  navigation: ShowQRCodeNavigationProp;
  route: ShowQRCodeNavigationRouteProp;
};

interface TransactionType {
  title: string;
  nextPage: 'Password' | 'ScanQRCode';
}

const InformValue: React.FC<Props> = ({route, navigation}) => {
  const {transactionType} = route.params;

  const transaction: TransactionType = {
    title: transactionType === 'pay' ? 'pagamento' : 'recebimento',
    nextPage: transactionType === 'pay' ? 'Password' : 'ScanQRCode'
  };

  return (
    <ContainerFluid>
      <Header>
        <IconButton
          onPress={() => navigation.goBack()}
          name="keyboard-arrow-left"
          color="#DADADA70"
          size={48}
        />
      </Header>
      <Title>Valor do {transaction.title}</Title>
      <InputValueContainer>
        <InputValueCurrency>R$</InputValueCurrency>
        <InputValue keyboardType="number-pad" autoFocus />
      </InputValueContainer>
      <Footer>
        <ActionButton
          label="Continuar"
          onPress={() => navigation.navigate(transaction.nextPage)}
        />
      </Footer>
    </ContainerFluid>
  );
};

export default InformValue;
