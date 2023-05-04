import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  firstValueFrom,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/user';
import {
  deleteUser,
  removeAllSelectedUsers,
  selectAllUsers,
  sortedNewestUsers,
  sortedUsersAlphabetically,
} from 'src/app/store/actions/users';
import { selectedUsersSelector } from 'src/app/store/selectors/users.selector';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss'],
})
export class UserToolbarComponent implements OnInit, OnDestroy {
  @Output() onSearch = new EventEmitter<string>();
  private readonly searchSubject = new Subject<string | undefined>();
  private searchSubscription?: Subscription;
  isAllUsersSelected: boolean = false;
  selectedUsers$: Observable<string[]> = this.store.select(
    selectedUsersSelector
  );
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchSubject
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((results) => this.onSearch.emit(results));
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }
  handleSelectAll() {
    this.isAllUsersSelected = !this.isAllUsersSelected;
    console.log(this.isAllUsersSelected);
    if (this.isAllUsersSelected) {
      console.log(1);
      this.store.dispatch(selectAllUsers());
    }
    if (!this.isAllUsersSelected) {
      console.log(2);
      this.store.dispatch(removeAllSelectedUsers());
    }
  }
  handleAlphabeticalOrderSort() {
    this.store.dispatch(sortedUsersAlphabetically());
  }
  handleNewestOrderSort() {
    this.store.dispatch(sortedNewestUsers());
  }
  handleInput(q: string) {
    this.searchSubject.next(q.toLocaleLowerCase());
  }
  async handleDelete() {
    const users = await firstValueFrom(this.selectedUsers$);
    users.forEach((u) => this.store.dispatch(deleteUser({ id: u })));
  }
}
