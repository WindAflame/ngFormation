import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetsComponent } from './bets/bets.component';
import { BetComponent } from './bet/bet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BetsComponent, 
    BetComponent
  ],
  exports: [
    BetsComponent
  ]
})
export class BetsModule { }
