import { createReducer, on } from '@ngrx/store';

import { IUser } from 'src/app/user/models/i-user';
import {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  addUser,
  addUserSuccess,
  addUserFailure,
  addSelectedUser,
  deleteSelectedUser,
  selectAllUsers,
  removeAllSelectedUsers,
  sortedUsersAlphabetically,
  sortedNewestUsers,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
} from '../actions/users';
export interface UserState {
  isLoading: boolean;
  users: IUser[];
  error: string | null;
  selectedUsers: Array<string>;
}
export interface AppState {
  users: UserState;
}
const initialState: UserState = {
  isLoading: false,
  error: null,
  users: [],
  selectedUsers: [],
};

export const reducers = createReducer(
  initialState,
  on(getUsers, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getUsersSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    users: action.users,
  })),
  on(getUsersFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(addUser, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(addUserSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    users: [action, ...state.users],
  })),
  on(addUserFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(addSelectedUser, (state, { id }) => {
    console.log(id, 'action');
    return {
      ...state,
      selectedUsers: [...state.selectedUsers, id],
    };
  }),
  on(deleteSelectedUser, (state, action) => ({
    ...state,
    selectedUsers: state.selectedUsers.filter((id) => id !== action.id),
  })),
  on(selectAllUsers, (state) => ({
    ...state,
    selectedUsers: state.users.map((u) => u.id),
  })),
  on(removeAllSelectedUsers, (state) => ({
    ...state,
    selectedUsers: [],
  })),
  on(sortedUsersAlphabetically, (state) => ({
    ...state,
    users: [
      ...state.users
        .slice()
        .sort((a, b) => a.lastName.localeCompare(b.lastName)),
    ],
  })),
  on(sortedNewestUsers, (state) => ({
    ...state,
    users: [
      ...state.users
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ),
    ],
  })),
  on(deleteUser, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(deleteUserSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    users: state.users.filter((u) => u.id !== action.id),
  })),
  on(deleteUserFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
