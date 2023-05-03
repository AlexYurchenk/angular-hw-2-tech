import { Component, Input } from '@angular/core';
import { IUser } from '../models/i-user';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/user';
import {
  addSelectedUser,
  deleteSelectedUser,
} from 'src/app/store/actions/users';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: IUser;

  @Input() isChecked: boolean = false;
  constructor(private store: Store<AppState>) {}

  handleChecked(id: string) {
    const isChecked = !this.isChecked;

    if (isChecked) {
      this.store.dispatch(addSelectedUser({ id }));
    }
    if (!isChecked) {
      this.store.dispatch(deleteSelectedUser({ id }));
    }
  }
}
