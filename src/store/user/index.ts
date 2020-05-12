import { Reducer } from 'redux';
import { UserState, User, UserTypes } from './types';
import { AuthTypes } from '../auth/types';

const INITIAL_STATE: UserState = {
  data: {} as User
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_SUCCESS:
      return { ...state, data: action.payload.user };
    case UserTypes.UPDATE_AVATAR_SUCCESS:
      return { ...state, data: action.payload.user };
    case AuthTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
