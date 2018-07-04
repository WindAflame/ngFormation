import { UsersComponent } from './users/users/users.component';
import { ErrorComponent } from './public/error/error.component';
import { BetsComponent } from './bets/bets/bets.component';
import { UserRestService } from './services/user-rest.service';
import { AuthService } from './services/auth.service';
import { BetsModule } from './bets/bets.module';
import { UserModule } from './users/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { GenericUserService } from './genericservices/generic-user-service';
import { LoginGuard } from './guards/login.guard';


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent, canActivate: [LoginGuard] },
  { path: 'bets', component: BetsComponent, canActivate: [LoginGuard] },


  { path: '**', component: ErrorComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    UserModule,
    BetsModule,

    RouterModule.forRoot(ROUTES)
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
