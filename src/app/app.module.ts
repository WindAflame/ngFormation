import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericUserService } from './genericservices/generic-user-service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
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
