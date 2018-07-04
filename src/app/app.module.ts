import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { BetsModule } from './bets/bets.module';
import { UserModule } from './users/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { GenericUserService } from './genericservices/generic-user-service';
import { HttpClientModule } from '@angular/common/http';
import { UserRestService } from './services/user-rest.service';
import { RouterModule, Routes } from '@angular/router';
import { BetsComponent } from './bets/bets/bets.component';
import { UsersComponent } from './users/users/users.component';

const route: Routes = [
  { path: 'bets', component: BetsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),

    UserModule,
    BetsModule
  ],
  providers: [
    {
      provide: GenericUserService,
      useClass: UserRestService
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
