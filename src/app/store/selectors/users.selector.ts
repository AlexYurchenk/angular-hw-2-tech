import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/user';

export const selectFeature = (state: AppState) => state.users;
export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);
export const userSelector = createSelector(
  selectFeature,
  (state) => state.users
);
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
export const selectedUsersSelector = createSelector(
  selectFeature,
  (state) => state.selectedUsers
);
