import { combineReducers } from 'redux';

import appStatus from './appStatus';
import auth from './auth';
import signUp from './signUp';
import user from './user';

export default combineReducers({
  appStatus,
  auth,
  signUp,
  user,
});
