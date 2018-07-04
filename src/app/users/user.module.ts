import { UsersByNamePipe } from './pipes/users-by-name.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UserPipe } from './pipes/user.pipe';
import { BetsListComponent } from './bets-list/bets-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    UserComponent,
    UsersComponent,
    UserPipe,
    UsersByNamePipe,
    BetsListComponent
  ],
  exports: [
    UserComponent,
    UsersComponent
  ]
})
export class UserModule { }
