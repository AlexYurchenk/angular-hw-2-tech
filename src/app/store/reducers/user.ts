import {
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { IUser } from 'src/app/user/models/i-user';
import {
  getUsers,
  getUsersSuccess,
  addUser,
  addUserSuccess,
  deleteUser,
  deleteUserSuccess,
} from '../actions/users';
export interface UserState {
  users: ReadonlyArray<IUser>;
}
const initialState: ReadonlyArray<IUser> = [];

export const userReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, { users }) => [...users]),
  on(addUserSuccess, (state, { user }) => [...state, user]),
  on(deleteUserSuccess, (state, { id }) => state.filter((u) => u.id !== id))
);

export const reducers: ActionReducerMap<UserState> = {
  users: userReducer,
};
