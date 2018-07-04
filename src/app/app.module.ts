import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { BetsModule } from './bets/bets.module';
import { UserModule } from './users/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { GenericUserService } from './genericservices/generic-user-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    UserModule,
    BetsModule
  ],
  providers: [
    {
      provide: GenericUserService,
      useClass: UserService
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
