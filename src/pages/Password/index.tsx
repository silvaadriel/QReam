import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../Router';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';
import PasswordInput from '../../components/PasswordInput';
import ActionButton from '../../components/ActionButton';
import IconButton from '../../components/IconButton';

import {Title, InputPasswordContainer, Footer} from './styles';

type ShowQRCodeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Password'
>;

type Props = {
  navigation: ShowQRCodeNavigationProp;
};

const Password: React.FC<Props> = ({navigation}) => {
  const [password, setPassword] = useState('');

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
      <Title>Informe sua senha</Title>
      <InputPasswordContainer>
        <PasswordInput
          password={password}
          passwordLength={4}
          onChangeText={(text) => setPassword(text)}
        />
      </InputPasswordContainer>
      <Footer>
        <ActionButton
          label="Continuar"
          onPress={() => navigation.navigate('ShowQRCode')}
        />
      </Footer>
    </ContainerFluid>
  );
};

export default Password;
