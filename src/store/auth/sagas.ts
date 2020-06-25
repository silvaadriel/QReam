import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../services/api';
import { loginSuccess, loginFailure } from './actions';
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
  } catch {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique sua credencial/senha',
    );
    yield put(loginFailure());
  }
}

export default all([takeLatest(AuthTypes.LOGIN_REQUEST, login)]);
