import React, { useState, useRef, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ApplicationState } from '../../store';
import { signUpRequest } from '../../store/signUp/actions';

import TextBox from '../../components/TextBox';
import ActionButton from '../../components/ActionButton';
import ContainerFluid from '../../components/ContainerFluid';

import {
  ContentContainer,
  SignUpForm,
  Title,
  SignUpText,
  SignUpButton,
} from './styles';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(
    (state: ApplicationState) => state.signUp.loading,
  );

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const credentialTextBoxRef = useRef<TextInput>(null);
  const passwordTextBoxRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(() => {
    dispatch(signUpRequest(name, credential, password));
  }, [dispatch, name, credential, password]);

  const isActionButtonDisabled = useMemo(
    () => !(name && credential && password) || isLoading,
    [name, credential, password, isLoading],
  );

  return (
    <ContainerFluid>
      <ContentContainer>
        <Title>Crie sua conta!</Title>

        <SignUpForm>
          <TextBox
            value={name}
            onChangeText={text => setName(text)}
            autoCorrect={false}
            placeholder="nome completo"
            returnKeyType="next"
            onSubmitEditing={() => credentialTextBoxRef.current?.focus()}
          />

          <TextBox
            ref={credentialTextBoxRef}
            value={credential}
            onChangeText={text => setCredential(text)}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="e-mail, CPF ou telefone"
            returnKeyType="next"
            onSubmitEditing={() => passwordTextBoxRef.current?.focus()}
          />

          <TextBox
            ref={passwordTextBoxRef}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="senha"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={handleSignUp}
          />

          <ActionButton
            disabled={isActionButtonDisabled}
            loading={isLoading}
            onPress={handleSignUp}
          >
            Continuar
          </ActionButton>

          <SignUpButton onPress={() => navigation.goBack()}>
            <SignUpText>Voltar para login</SignUpText>
          </SignUpButton>
        </SignUpForm>
      </ContentContainer>
    </ContainerFluid>
  );
};

export default SignUp;
