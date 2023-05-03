import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../models/i-user';
//import { UserService } from '../services/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/user';
import { getUsers } from 'src/app/store/actions/users';
import {
  isLoadingSelector,
  userSelector,
  errorSelector,
  selectedUsersSelector,
} from 'src/app/store/selectors/users.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() query: string = '';
  users$!: Observable<IUser[]>;
  selectedUsers$!: Observable<string[]>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.users$ = this.store.pipe(select(userSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.selectedUsers$ = this.store.pipe(select(selectedUsersSelector));
  }
}
