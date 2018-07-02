import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //1: UserService
    /*2:
    {
      provide: UserService,
      useClass: UserService  
    }
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
