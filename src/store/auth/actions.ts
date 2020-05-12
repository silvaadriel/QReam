import { action } from 'typesafe-actions';

import { AuthTypes } from './types';
import { User } from '../user/types';

export const loginRequest = (credential: string, password: string) =>
  action(AuthTypes.LOGIN_REQUEST, { credential, password });

export const loginSuccess = (token: string, user: User) =>
  action(AuthTypes.LOGIN_SUCCESS, { token, user });

export const loginFailure = () => action(AuthTypes.LOGIN_FAILURE);

export const logout = () => action(AuthTypes.LOGOUT);
