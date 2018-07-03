import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bet } from '../../models/bet';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bet-form-code-advanced',
  templateUrl: './bet-form-code-advanced.component.html',
  styleUrls: ['./bet-form-code-advanced.component.css']
})
export class BetFormCodeAdvancedComponent implements OnInit {

  @Output()
  public newBet: EventEmitter<Bet> = new EventEmitter<Bet>();
  private userForm: FormGroup;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.userForm = formBuilder.group({
      amount: ['', [
        Validators.required, BetFormCodeAdvancedComponent.enoughMoney
      ]],
      teama: [''],
      teamb: ['']
    });
  }

  ngOnInit() {}

  static enoughMoney(control: FormControl) {
    const amount = control.value;
    return amount < 1000 ? { notEnough: true} : null;
  }

  public submit() {
    console.log(this.userForm.value);
  }

}
