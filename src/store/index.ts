import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import { AuthState } from './auth/types';
import { SignUpState } from './signUp/types';
import { UserState } from './user/types';
import rootSaga from './rootSaga';

export interface ApplicationState {
  readonly auth: AuthState;
  readonly signUp: SignUpState;
  readonly user: UserState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
