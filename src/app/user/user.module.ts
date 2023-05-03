import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers/user';
import { CreateComponent } from './pages/create/create.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '../store/effect/users.effect';
import { UserToolbarComponent } from './user-toolbar/user-toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent,
    UserFormComponent,
    CreateComponent,
    UserListPageComponent,
    UserToolbarComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([UsersEffects]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [CreateComponent, UserListPageComponent],
})
export class UserModule {}
