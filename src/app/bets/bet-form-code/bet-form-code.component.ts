import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Bet } from '../../models/bet';

@Component({
  selector: 'app-bet-form-code',
  templateUrl: './bet-form-code.component.html',
  styleUrls: ['./bet-form-code.component.css']
})
export class BetFormCodeComponent implements OnInit {

  betform: FormGroup;

  amoutCtrl: FormControl;

  @Output('newbet')
  newbet: EventEmitter<Bet> = new EventEmitter<Bet>();

  constructor(fb: FormBuilder) {

    this.amoutCtrl = fb.control('',
      [
        BetFormCodeComponent.enoughMoney
      ]);


    this.betform = fb.group({
      amount: this.amoutCtrl,
      teama: fb.control(''),
      teamb: fb.control('')
    });
  }

  static enoughMoney(control: FormControl) {
    const amount = control.value;
    return amount < 1000 ? { notEnough: true } : null;
  }


  submit() {
    this.newbet.emit(this.betform.value);
  }
  ngOnInit() {
  }





}
