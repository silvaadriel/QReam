export enum SignUpTypes {
  SIGN_UP_REQUEST = '@signUp/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS = '@signUp/SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE = '@signUp/SIGN_UP_FAILURE',
}

export interface SignUpState {
  readonly signedUp: boolean;
  readonly loading: boolean;
  readonly error: boolean;
}
