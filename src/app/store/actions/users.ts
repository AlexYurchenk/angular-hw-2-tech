import { createAction } from '@ngrx/store';
import { IUser } from 'src/app/user/models/i-user';
export const getUsers = createAction('[Users] Get users');
export const getUsersSuccess = createAction(
  '[Users] Get users success',
  (users: ReadonlyArray<IUser>) => ({ users })
);
export const addUser = createAction('[Users] Add user', (user: IUser) => ({
  user,
}));
export const addUserSuccess = createAction(
  '[Users] Add user success',
  (user: IUser) => ({ user })
);
export const deleteUser = createAction('[Users] Delete user', (id: string) => ({
  id,
}));

export const deleteUserSuccess = createAction(
  '[Users] Delete user success',
  (id: string) => ({ id })
);
