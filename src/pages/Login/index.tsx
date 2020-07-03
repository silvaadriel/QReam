import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated, TextInput, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

import { ApplicationState } from '../../store';
import { loginRequest } from '../../store/auth/actions';

import TextBox from '../../components/TextBox';
import ActionButton from '../../components/ActionButton';
import ContainerFluid from '../../components/ContainerFluid';

import logoLight from '../../assets/logo-light.png';
import logoDark from '../../assets/logo-dark.png';

import {
  ContentContainer,
  LoginForm,
  LogoContainer,
  Logo,
  SignUpText,
  SignUpButton,
} from './styles';

const Login: React.FC = () => {
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [opacity] = useState(new Animated.Value(0));
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 40 }));
  const [logoScale] = useState(new Animated.Value(1));

  const loading = useSelector((state: ApplicationState) => state.auth.loading);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const theme = useContext(ThemeContext);

  const passwordTextBoxRef = useRef<TextInput>(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 2,
        delay: 400,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        delay: 400,
        useNativeDriver: true,
      }),
    ]).start();

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  });

  const handleLogin = useCallback(() => {
    dispatch(loginRequest(credential, password));
  }, [credential, dispatch, password]);

  const keyboardDidShow = useCallback(() => {
    Animated.timing(logoScale, {
      toValue: 0.6,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [logoScale]);

  const keyboardDidHide = useCallback(() => {
    Animated.timing(logoScale, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [logoScale]);

  const isActionButtonDisabled = useMemo(
    () => !(credential && password) || loading,
    [credential, password, loading],
  );

  const logo = useMemo(() => {
    switch (theme.name) {
      case 'light':
        return logoLight;
      case 'dark':
        return logoDark;
      default:
        return logoLight;
    }
  }, [theme.name]);

  return (
    <ContainerFluid>
      <ContentContainer>
        <LogoContainer>
          <Logo
            style={{ opacity, transform: [{ scale: logoScale }] }}
            source={logo}
            resizeMode="contain"
          />
        </LogoContainer>

        <LoginForm style={{ opacity, transform: [{ translateY: offset.y }] }}>
          <TextBox
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
            onSubmitEditing={handleLogin}
          />

          <ActionButton
            disabled={isActionButtonDisabled}
            loading={loading}
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
