import { createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user';
import { IUser } from '../../user/models/i-user';

export const usersSelector = createSelector(
  (state: UserState) => state.users,
  (users: ReadonlyArray<IUser>) => users
);
