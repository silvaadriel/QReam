import React, { useState, useCallback, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { transparentize } from 'polished';

import formatValue from '../../utils/formatValue';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';
import ActionButton from '../../components/ActionButton';
import IconButton from '../../components/IconButton';

import {
  Footer,
  InputValue,
  InputValueContainer,
  InputValueCurrency,
  Title,
} from './styles';

interface TransactionType {
  title: string;
  nextPage: 'Password' | 'ScanQRCode';
}

const InformValue: React.FC = () => {
  const [value, setValue] = useState(formatValue(''));

  const route = useRoute<any>();
  const navigation = useNavigation();

  const theme = useContext(ThemeContext);

  const { transactionType } = route.params;

  const transaction: TransactionType = {
    title: transactionType === 'pay' ? 'pagamento' : 'recebimento',
    nextPage: transactionType === 'pay' ? 'Password' : 'ScanQRCode',
  };

  const handleChangeText = useCallback((text: string) => {
    setValue(currentValue => {
      const newValue = formatValue(text);
      return newValue === 'NaN' ? currentValue : newValue;
    });
  }, []);

  return (
    <ContainerFluid>
      <Header>
        <IconButton
          onPress={() => navigation.goBack()}
          icon="keyboard-arrow-left"
          iconColor={transparentize(0.5, theme.colors.textOnSecundary)}
          iconSize={48}
        />
      </Header>

      <Title>Valor do {transaction.title}</Title>

      <InputValueContainer>
        <InputValueCurrency>R$</InputValueCurrency>

        <InputValue
          value={value}
          maxLength={10}
          onChangeText={handleChangeText}
          keyboardType="numeric"
          autoFocus
          returnKeyType="send"
          onSubmitEditing={() => navigation.navigate(transaction.nextPage)}
        />
      </InputValueContainer>

      <Footer>
        <ActionButton onPress={() => navigation.navigate(transaction.nextPage)}>
          Continuar
        </ActionButton>
      </Footer>
    </ContainerFluid>
  );
};

export default InformValue;
