export enum UserTypes {
  UPDATE_AVATAR_REQUEST = '@user/UPDATE_AVATAR_REQUEST',
  UPDATE_AVATAR_SUCCESS = '@user/UPDATE_AVATAR_SUCCESS',
  UPDATE_AVATAR_FAILURE = '@user/UPDATE_AVATAR_FAILURE',
}

export interface User {
  id: string;
  name: string;
  credential: string;
  avatar: string;
  password: string;
}

export interface UserState {
  readonly data: User;
}
