import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import signUp from './signUp/sagas';
import user from './user/sagas';

export default function* rootSaga(): any {
  yield all([auth, signUp, user]);
}
