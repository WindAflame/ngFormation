import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';

import { UserService } from './shared/services/user.service';
import { AuthentificationService } from './shared/services/authentification.service';
import { AuthentificationGuardService } from './shared/services/authentification-guard.service';

import { AppComponent } from './app.component';
import { GenericCrud } from './shared/services/generic-crud';
import { UserModule } from './user/user.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { BetsModule } from './bets/bets.module';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    BetsModule,
    RouterModule.forRoot(AppRouting)
  ],
  providers: [
    {
      provide: GenericCrud,
      useClass: UserService
    },
    {
      provide: AuthentificationService,
      useClass: AuthentificationService
    },
    {
      provide: AuthentificationGuardService,
      useClass: AuthentificationGuardService
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
