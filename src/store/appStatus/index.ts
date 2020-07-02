import { Reducer } from 'redux';
import { AppStatusState, AppStatusTypes } from './types';

const INITIAL_STATE: AppStatusState = {
  theme: 'light',
};

const reducer: Reducer<AppStatusState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppStatusTypes.CHANGE_APP_THEME:
      return { ...state, theme: action.payload.theme };
    default:
      return state;
  }
};

export default reducer;
