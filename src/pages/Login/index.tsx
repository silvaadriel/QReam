import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../Router';

import TextBox from '../../components/TextBox';
import ActionButton from '../../components/ActionButton';
import ContainerFluid from '../../components/ContainerFluid';

import {LoginForm, Logo} from './styles';

type ShowQRCodeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: ShowQRCodeNavigationProp;
};

const Login: React.FC<Props> = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <ContainerFluid>
      <Logo>
        <Icon name="fingerprint" color="#DADADA50" size={123} />
      </Logo>
      <LoginForm>
        <TextBox textInput={{placeholder: 'e-mail, CPF ou telefone'}} />
        <TextBox
          textInput={{placeholder: 'senha', secureTextEntry: hidePassword}}
          icon={{
            name: hidePassword ? 'visibility' : 'visibility-off',
            color: '#DADADA50',
            size: 24,
            onPress: () => setHidePassword(!hidePassword)
          }}
        />
        <ActionButton
          onPress={() => navigation.navigate('Home')}
          label="Continuar"
        />
      </LoginForm>
    </ContainerFluid>
  );
};

export default Login;
