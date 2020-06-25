import { action } from 'typesafe-actions';
import { UserTypes, User } from './types';

export const updateAvatarRequest = (avatar: string): any =>
  action(UserTypes.UPDATE_AVATAR_REQUEST, { avatar });

export const updateAvatarSuccess = (user: User): any =>
  action(UserTypes.UPDATE_AVATAR_SUCCESS, { user });

export const updateAvatarFailure = (): any =>
  action(UserTypes.UPDATE_AVATAR_FAILURE);
