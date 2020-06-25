import { action } from 'typesafe-actions';

import { SignUpTypes } from './types';

export const signUpRequest = (
  name: string,
  credential: string,
  password: string,
): any => action(SignUpTypes.SIGN_UP_REQUEST, { name, credential, password });

export const signUpSuccess = (): any => action(SignUpTypes.SIGN_UP_SUCCESS);

export const signUpFailure = (): any => action(SignUpTypes.SIGN_UP_FAILURE);
