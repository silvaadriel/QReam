import { action } from 'typesafe-actions';

import { AppStatusTypes } from './types';

export const changeAppTheme = (theme: 'light' | 'dark'): any =>
  action(AppStatusTypes.CHANGE_APP_THEME, { theme });
