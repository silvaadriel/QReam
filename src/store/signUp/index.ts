import { Reducer } from 'redux';
import { SignUpState, SignUpTypes } from './types';

const INITIAL_STATE: SignUpState = {
  signedUp: false,
  loading: false,
  error: false
};

const reducer: Reducer<SignUpState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignUpTypes.SIGN_UP_REQUEST:
      return { ...state, loading: true };
    case SignUpTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        signedUp: true,
        error: false
      };
    case SignUpTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        signedUp: false
      };
    default:
      return state;
  }
};

export default reducer;
