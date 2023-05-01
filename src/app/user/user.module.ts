import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StoreModule } from '@ngrx/store';
import { reducers, userReducer } from '../store/reducers/user';
import { CreateComponent } from './pages/create/create.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '../store/effect/users.effect';

userReducer;
@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent,
    UserFormComponent,
    CreateComponent,
    UserListPageComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot([UsersEffects]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [CreateComponent, UserListPageComponent],
})
export class UserModule {}
