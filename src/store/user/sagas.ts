import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { AxiosResponse } from 'axios';

import api from '../../services/api';
import { updateAvatarSuccess, updateAvatarFailure } from './actions';
import { UserTypes, User } from './types';

export function* updateUserAvatar({ payload }: any): any {
  try {
    const { avatar } = payload;

    const { data: user }: AxiosResponse<User> = yield call(
      api.post,
      'users/avatar',
      {
        avatar,
      },
    );

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso!');

    yield put(updateAvatarSuccess(user));
  } catch {
    Alert.alert('Falha na atualização', 'Erro ao atualizar Perfil');
    yield put(updateAvatarFailure());
  }
}

export default all([
  takeLatest(UserTypes.UPDATE_AVATAR_REQUEST, updateUserAvatar),
]);
