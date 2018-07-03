import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Bet } from '../../models/bet';

@Component({
  selector: 'app-bet-form-template',
  templateUrl: './bet-form-template.component.html',
  styleUrls: ['./bet-form-template.component.css']
})
export class BetFormTemplateComponent implements OnInit {

  @Output()
  public newBet: EventEmitter<Bet> = new EventEmitter<Bet>();

  constructor() { }

  ngOnInit() {
  }

  public submit(result: any) {
    console.log(result);
    const formNewBet = new Bet(result.amount, result.teama, result.teamb);
    this.newBet.emit(formNewBet);
  }

}
