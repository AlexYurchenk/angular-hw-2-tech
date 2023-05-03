import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss'],
})
export class UserListPageComponent {
  query: string = '';
  handleSearch(q: string) {
    this.query = q;
  }
}
