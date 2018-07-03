import { Bet } from './../../models/bet';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bet-form-template',
  templateUrl: './bet-form-template.component.html',
  styleUrls: ['./bet-form-template.component.css']
})
export class BetFormTemplateComponent implements OnInit {
  public bet = new Bet(undefined, undefined, undefined);

  @Output('newbet')
  newbet: EventEmitter<Bet> = new EventEmitter<Bet>();


  constructor() { }

  ngOnInit() {
  }

  public submit() {
    console.log(this.bet);
    const nb = new Bet(0, '', '');
    Object.assign(nb, this.bet);
    this.newbet.emit(nb);
  }

}
