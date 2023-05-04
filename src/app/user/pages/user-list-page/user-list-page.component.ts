import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/user';
import { errorSelector } from 'src/app/store/selectors/users.selector';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss'],
})
export class UserListPageComponent {
  query: string = '';
  error$ = this.store.pipe(select(errorSelector));
  constructor(private store: Store<AppState>) {}
  handleSearch(q: string) {
    this.query = q;
  }
}
