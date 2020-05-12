import React, { useState, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import * as AuthActions from '../../store/auth/actions';

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

interface DispatchProps {
  loginRequest(credential: string, password: string): void;
}

type LoginProps = DispatchProps;

const Login: React.FC<LoginProps> = ({ loginRequest }) => {
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const passwordTextBoxRef = useRef<TextInput>(null);

  const handleLogin = useCallback(() => {
    loginRequest(credential, password);
  }, [credential, password, loginRequest]);

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

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(Login);
