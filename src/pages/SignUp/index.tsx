import React, { useState, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { TextInput, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as SignUpActions from '../../store/signUp/actions';

import TextBox from '../../components/TextBox';
import ActionButton from '../../components/ActionButton';
import ContainerFluid from '../../components/ContainerFluid';

import {
  ContentContainer,
  LoginForm,
  Title,
  SignUpText,
  SignUpButton
} from './styles';
import { ApplicationState } from 'src/store';

interface StateProps {
  isLoading: boolean;
}

interface DispatchProps {
  signUpRequest(name: string, credential: string, password: string): void;
}

type LoginProps = StateProps & DispatchProps;

const Login: React.FC<LoginProps> = ({ isLoading, signUpRequest }) => {
  const [name, setName] = useState('');
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const credentialTextBoxRef = useRef<TextInput>(null);
  const passwordTextBoxRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(() => {
    signUpRequest(name, credential, password);
  }, [name, credential, password, signUpRequest]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2B2A3F'
        }}
      >
        <ActivityIndicator size="large" color="#2699DA" />
      </View>
    );
  }

  return (
    <ContainerFluid>
      <ContentContainer>
        <Title>Crie sua conta!</Title>

        <LoginForm>
          <TextBox
            value={name}
            onChangeText={(text) => setName(text)}
            autoCorrect={false}
            placeholder="nome completo"
            returnKeyType="next"
            onSubmitEditing={() => credentialTextBoxRef.current?.focus()}
          />

          <TextBox
            ref={credentialTextBoxRef}
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
            onSubmitEditing={handleSignUp}
          />

          <ActionButton
            disabled={!(name && credential && password)}
            onPress={handleSignUp}
          >
            Continuar
          </ActionButton>

          <SignUpButton onPress={() => navigation.goBack()}>
            <SignUpText>Voltar para login</SignUpText>
          </SignUpButton>
        </LoginForm>
      </ContentContainer>
    </ContainerFluid>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: state.signUp.loading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SignUpActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
