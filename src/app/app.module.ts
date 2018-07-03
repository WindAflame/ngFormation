import { UserModule } from './users/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,

    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
