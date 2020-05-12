import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../services/api';
import { updateAvatarSuccess, updateAvatarFailure } from '../user/actions';
import { UserTypes } from './types';

export function* updateUserAvatar({ payload }: any) {
  try {
    const { avatar } = payload;

    const { data: user } = yield call(api.post, 'users/avatar', {
      avatar
    });

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso!');

    yield put(updateAvatarSuccess(user));
  } catch {
    Alert.alert('Falha na atualização', 'Erro ao atualizar Perfil');
    yield put(updateAvatarFailure());
  }
}

export default all([
  takeLatest(UserTypes.UPDATE_AVATAR_REQUEST, updateUserAvatar)
]);
