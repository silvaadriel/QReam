import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import * as rootNavigation from '../../rootNavigation';

import api from '../../services/api';
import { signUpSuccess, signUpFailure } from './actions';
import { SignUpTypes } from './types';

export function* signUp({ payload }: any) {
  try {
    const { name, credential, password } = payload;

    yield call(api.post, 'users', {
      name,
      credential,
      password
    });

    Alert.alert('Cadastro realizado', 'Faça seu login');

    yield put(signUpSuccess());

    rootNavigation.navigate('Login');
  } catch {
    Alert.alert('Falha no cadastro', 'Verifique seus dados');
    yield put(signUpFailure());
  }
}

export default all([takeLatest(SignUpTypes.SIGN_UP_REQUEST, signUp)]);
