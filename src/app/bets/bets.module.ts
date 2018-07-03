import { BetsComponent } from './bets/bets.component';
import { BetComponent } from './bet/bet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BetComponent,
    BetsComponent,
  ],
  exports: [
    BetComponent,
    BetsComponent
  ]
})
export class BetsModule { }
