import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bet-form-code',
  templateUrl: './bet-form-code.component.html',
  styleUrls: ['./bet-form-code.component.css']
})
export class BetFormCodeComponent implements OnInit {

  betform: FormGroup;

  amoutCtrl: FormControl;


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
    console.log(this.betform.value);
  }
  ngOnInit() {
  }





}
