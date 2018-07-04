import { BetsComponent } from './bets/bets.component';
import { BetComponent } from './bet/bet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetFormTemplateComponent } from './bet-form-template/bet-form-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BetFormCodeComponent } from './bet-form-code/bet-form-code.component';
import { BetFormCodeAdvancedComponent } from './bet-form-code-advanced/bet-form-code-advanced.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    BetComponent,
    BetsComponent,
    BetFormTemplateComponent,
    BetFormCodeComponent,
    BetFormCodeAdvancedComponent,
  ],
  exports: [
    BetComponent,
    BetsComponent
  ]
})
export class BetsModule { }
