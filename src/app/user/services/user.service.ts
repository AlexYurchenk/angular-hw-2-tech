import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../models/i-user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersUrl = 'https://64444b85914c816083b7b344.mockapi.io/users';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(this.usersUrl)
      .pipe(catchError(this.handleError));
  }

  deleteUsers(ids: string[]) {
    return ids.map((id) => {
      return this.http
        .delete(`${this.usersUrl}/${id}`)
        .pipe(catchError((error) => error.json()));
    });
  }
  crateUser(user: Omit<IUser, 'id'>) {
    return this.http
      .post(this.usersUrl, user)
      .pipe(catchError((error) => error.json()));
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
