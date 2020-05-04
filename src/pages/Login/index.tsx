import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import TextBox from '../../components/TextBox';
import ActionButton from '../../components/ActionButton';
import ContainerFluid from '../../components/ContainerFluid';

import { ContentContainer, LoginForm, Logo } from './styles';

const Login: React.FC = () => {
  const credentialTextBoxRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  return (
    <ContainerFluid>
      <ContentContainer>
        <Logo>
          <Icon name="fingerprint" color="#DADADA50" size={123} />
        </Logo>

        <LoginForm>
          <TextBox
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="e-mail, CPF ou telefone"
            returnKeyType="next"
            onSubmitEditing={() => credentialTextBoxRef.current?.focus()}
          />

          <TextBox
            ref={credentialTextBoxRef}
            placeholder="senha"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => navigation.navigate('Home')}
          />

          <ActionButton onPress={() => navigation.navigate('Home')}>
            Continuar
          </ActionButton>
        </LoginForm>
      </ContentContainer>
    </ContainerFluid>
  );
};

export default Login;
