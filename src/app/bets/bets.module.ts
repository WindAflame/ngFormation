import { BetsComponent } from './bets/bets.component';
import { BetComponent } from './bet/bet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BetFormTemplateComponent } from './bet-form-template/bet-form-template.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    BetComponent,
    BetsComponent,
    BetFormTemplateComponent,
  ],
  exports: [
    BetComponent,
    BetsComponent
  ]
})
export class BetsModule { }
