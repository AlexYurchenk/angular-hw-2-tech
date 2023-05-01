import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { UserListPageComponent } from './user/pages/user-list-page/user-list-page.component';
import { CreateComponent } from './user/pages/create/create.component';

const routes: Routes = [
  { path: '', component: UserListPageComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, UserModule],
})
export class AppRoutingModule {}
