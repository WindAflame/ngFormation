import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bet } from '../../models/bet';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bet-form-code',
  templateUrl: './bet-form-code.component.html',
  styleUrls: ['./bet-form-code.component.css']
})
export class BetFormCodeComponent implements OnInit {

  @Output()
  public newBet: EventEmitter<Bet> = new EventEmitter<Bet>();
  private userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      amount: new FormControl(),
      teama: new FormControl(),
      teamb: new FormControl()
    });
  }

  public submit() {
    console.log(this.userForm.value);
  }

}
