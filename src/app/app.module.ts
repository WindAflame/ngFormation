import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericUserService } from './genericservices/generic-user-service';
import { UserService } from './services/user.service';
import { UserPipe } from './pipes/user.pipe';
import { UsersByNamePipe } from './pipes/users-by-name.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPipe,
    UsersByNamePipe,
    HighlightDirective,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: GenericUserService,
      useClass: UserService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
