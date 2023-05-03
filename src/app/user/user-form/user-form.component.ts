import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../models/i-user';
import { AppState } from 'src/app/store/reducers/user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser } from 'src/app/store/actions/users';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
  user$!: Observable<IUser>;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(13),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[- +()0-9]+'),
      ]),
    });
  }
  handleSubmit() {
    const newUser: Omit<IUser, 'id'> = {
      ...this.form.value,
      createdAt: new Date().toISOString(),
      image:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg',
    };
    this.store.dispatch(addUser(newUser));
  }
  getErrorMessage() {
    if (this.form.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.hasError('email') ? 'Not a valid email' : '';
  }
  getEmailErrorMessage() {
    const errors = this.form.controls['email'].errors;
    if (!errors) {
      return;
    }
    if (errors['required']) {
      return 'You must enter an email. It is requeued';
    }
    return 'Wrong email pattern';
  }
  getPhoneErrorMessage() {
    const errors = this.form.controls['phone'].errors;
    if (!errors) {
      return;
    }
    if (errors['required']) {
      return 'You must enter an phone. It is requeued';
    }
    return 'Wrong phone pattern';
  }
  getFirsNameErrorMessage() {
    const errors = this.form.controls['firstName'].errors;
    if (!errors) {
      return;
    }
    if (errors['required']) {
      return 'You must enter a First name. It is requeued';
    }
    if (errors['minlength']) {
      return 'Minimal length of the name is 4';
    }
    return 'Max length of the name is 13';
  }
  getLastNameErrorMessage() {
    const errors = this.form.controls['lastName'].errors;
    if (!errors) {
      return;
    }
    if (errors['required']) {
      return 'You must enter a Last name. It is requeued';
    }
    if (errors['minlength']) {
      return 'Minimal length of the name is 4';
    }
    return 'Max length of the name is 15';
  }
}
