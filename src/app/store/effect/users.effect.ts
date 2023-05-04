import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { UserService } from 'src/app/user/services/user.service';
import {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  addUser,
  addUserSuccess,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
} from '../actions/users';
import { IUser } from 'src/app/user/models/i-user';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(getUsers),
      exhaustMap(() =>
        this.userService.getUsers().pipe(
          map((users) => getUsersSuccess({ users })),
          catchError((error) => of(getUsersFailure({ error: error.message })))
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(addUser),
      tap((user) => console.log(user)),
      concatMap((user) =>
        this.userService.crateUser(user).pipe(
          map((newUser) => {
            if (typeof newUser !== 'object') {
              throw new Error('');
            }
            const user = { ...newUser } as IUser;
            return addUserSuccess(user);
          }),
          catchError((error) => of(getUsersFailure({ error: error.message })))
        )
      )
    )
  );
  deleteMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteUser),
      mergeMap(({ id }) =>
        this.userService.deleteUser(id).pipe(
          map((_) => deleteUserSuccess({ id })),
          catchError((error) => of(deleteUserFailure({ error: error.message })))
        )
      )
    )
  );
  constructor(private action$: Actions, private userService: UserService) {}
}
