import { combineReducers } from 'redux';

import auth from './auth';
import signUp from './signUp';
import user from './user';

export default combineReducers({
  auth,
  signUp,
  user
});
