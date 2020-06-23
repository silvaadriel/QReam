import React, { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { loginRequest } from '../../store/auth/actions';

import TextBox from '../../components/TextBox';
import ActionButton from '../../components/ActionButton';
import ContainerFluid from '../../components/ContainerFluid';

import {
  ContentContainer,
  LoginForm,
  Logo,
  SignUpText,
  SignUpButton
} from './styles';

const Login: React.FC = () => {
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const passwordTextBoxRef = useRef<TextInput>(null);

  const handleLogin = useCallback(() => {
    dispatch(loginRequest(credential, password));
  }, [credential, dispatch, password]);

  return (
    <ContainerFluid>
      <ContentContainer>
        <Logo>
          <Icon name="fingerprint" color="#DADADA50" size={123} />
        </Logo>

        <LoginForm>
          <TextBox
            value={credential}
            onChangeText={(text) => setCredential(text)}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="e-mail, CPF ou telefone"
            returnKeyType="next"
            onSubmitEditing={() => passwordTextBoxRef.current?.focus()}
          />

          <TextBox
            ref={passwordTextBoxRef}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="senha"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={handleLogin}
          />

          <ActionButton
            disabled={!(credential && password)}
            onPress={handleLogin}
          >
            Continuar
          </ActionButton>

          <SignUpButton onPress={() => navigation.navigate('SignUp')}>
            <SignUpText>Crie uma conta</SignUpText>
          </SignUpButton>
        </LoginForm>
      </ContentContainer>
    </ContainerFluid>
  );
};

export default Login;
