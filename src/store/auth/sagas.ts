import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../services/api';
import { navigate, popToTop } from '../../rootNavigation';

import { loginSuccess, loginFailure, logout as onLogout } from './actions';
import { AuthTypes } from './types';

export function* login({ payload }: any): any {
  try {
    const { credential, password } = payload;

    const {
      data: { token, user },
    } = yield call(api.post, 'sessions', {
      credential,
      password,
    });

    yield put(loginSuccess(token, user));
    navigate('App');
  } catch {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique sua credencial/senha',
    );
    yield put(loginFailure());
  }
}

export function* logout(): any {
  yield put(onLogout());

  popToTop('Auth');
}

export default all([
  takeLatest(AuthTypes.LOGIN_REQUEST, login),
  takeLatest(AuthTypes.LOGOUT_REQUEST, logout),
]);
