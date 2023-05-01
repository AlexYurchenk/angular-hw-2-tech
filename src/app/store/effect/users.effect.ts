import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
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
  addUser,
  addUserSuccess,
  deleteUser,
  deleteUserSuccess,
} from '../actions/users';
import { IUser } from 'src/app/user/models/i-user';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(getUsers),
      exhaustMap(() =>
        this.userService.getUsers().pipe(
          map((users) => getUsersSuccess(users)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(addUser),
      tap((user) => console.log(user)),
      concatMap(({ user }) =>
        this.userService.crateUser(user).pipe(
          map((newUser) => addUserSuccess(newUser as IUser)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action$: Actions, private userService: UserService) {
    console.log(1);
  }
}
