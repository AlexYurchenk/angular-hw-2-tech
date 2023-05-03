import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/user/models/i-user';
export const getUsers = createAction('[Users] Get users');
export const getUsersSuccess = createAction(
  '[Users] Get users success',
  props<{ users: IUser[] }>()
);
export const getUsersFailure = createAction(
  '[Users] Get users failure',
  props<{ error: string }>()
);
export const addUser = createAction(
  '[Users] Add user',
  props<Omit<IUser, 'id'>>()
);
export const addUserSuccess = createAction(
  '[Users] Add user success',
  props<IUser>()
);
export const addUserFailure = createAction(
  '[Users] Add user failure',
  props<{ error: string }>()
);

export const addSelectedUser = createAction(
  '[Users] Add selected user',
  props<{ id: string }>()
);
export const deleteSelectedUser = createAction(
  '[Users] Delete selected user',
  props<{ id: string }>()
);
export const selectAllUsers = createAction('[Users]  Selected all users');
export const removeAllSelectedUsers = createAction(
  '[Users] Remove all selected users'
);
export const sortedUsersAlphabetically = createAction(
  '[Users] Sort users alphabetically'
);
export const sortedNewestUsers = createAction('[Users] Sort users newest');

export const deleteUser = createAction(
  '[Users] Delete user',
  props<{ id: string }>()
);

export const deleteUserSuccess = createAction(
  '[Users] Delete user success',
  props<{ id: string }>()
);
export const deleteUserFailure = createAction(
  '[Users] Delete user failure',
  props<{ error: string }>()
);
