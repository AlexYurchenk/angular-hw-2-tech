import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
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
    console.log('form', this.form);
    console.log(this.form.controls['email']);
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
