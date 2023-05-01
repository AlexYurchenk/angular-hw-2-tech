import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/i-user';
import { UserService } from '../services/user.service';
import { select, Store } from '@ngrx/store';
import { UserState } from '../../store/reducers/user';
import { getUsers } from 'src/app/store/actions/users';
import { usersSelector } from 'src/app/store/selectors/users.selector';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  users$ = this.store.pipe(select(usersSelector));
  constructor(private store: Store<UserState>) {}
  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }
}
