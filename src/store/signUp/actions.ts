import { action } from 'typesafe-actions';

import { SignUpTypes } from './types';

export const signUpRequest = (
  name: string,
  credential: string,
  password: string
) => action(SignUpTypes.SIGN_UP_REQUEST, { name, credential, password });

export const signUpSuccess = () => action(SignUpTypes.SIGN_UP_SUCCESS);

export const signUpFailure = () => action(SignUpTypes.SIGN_UP_FAILURE);
