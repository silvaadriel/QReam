import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { transparentize } from 'polished';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';
import ActionButton from '../../components/ActionButton';
import IconButton from '../../components/IconButton';

import PasswordInput from './PasswordInput';

import { Title, InputPasswordContainer, Footer } from './styles';

const Password: React.FC = () => {
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const theme = useContext(ThemeContext);

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

      <Title>Informe sua senha</Title>

      <InputPasswordContainer>
        <PasswordInput
          password={password}
          passwordLength={4}
          onChangeText={text => setPassword(text)}
          returnKeyType="send"
          onSubmitEditing={() => navigation.navigate('ShowQRCode')}
        />
      </InputPasswordContainer>

      <Footer>
        <ActionButton onPress={() => navigation.navigate('ShowQRCode')}>
          Continuar
        </ActionButton>
      </Footer>
    </ContainerFluid>
  );
};

export default Password;
