import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../models/i-user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: IUser;
  @Output() onChecked = new EventEmitter<string>();

  handleChecked(id: string) {
    this.onChecked.emit(id);
  }
}
