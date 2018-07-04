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
import { LoginGuard } from './guards/login.guard';
import { ErrorComponent } from './public/error/error.component';

const route: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'bets', component: BetsComponent, canActivate: [LoginGuard] },
  { path: 'users', component: UsersComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent
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
