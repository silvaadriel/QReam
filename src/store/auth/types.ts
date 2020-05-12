export enum AuthTypes {
  LOGIN_REQUEST = '@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@auth/LOGIN_FAILURE',
  LOGOUT = '@auth/LOGOUT'
}

export interface AuthState {
  readonly token: string;
  readonly logged: boolean;
  readonly loading: boolean;
  readonly error: boolean;
}
