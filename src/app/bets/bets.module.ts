import { BetsComponent } from './bets/bets.component';
import { BetComponent } from './bet/bet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BetFormTemplateComponent } from './bet-form-template/bet-form-template.component';
import { BetFormCodeComponent } from './bet-form-code/bet-form-code.component';

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
    BetFormCodeComponent,
  ],
  exports: [
    BetComponent,
    BetsComponent
  ]
})
export class BetsModule { }
