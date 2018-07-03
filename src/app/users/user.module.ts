import { UsersByNamePipe } from './pipes/users-by-name.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UserPipe } from './pipes/user.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
    UsersComponent,
    UserPipe,
    UsersByNamePipe
  ],
  exports: [
    UserComponent,
    UsersComponent
  ]
})
export class UserModule { }
