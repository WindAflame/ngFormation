import { Bet } from './../../models/bet';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  @Input('bet')
  bet: Bet;

  @Input('index')
  index: number;

  @Output('select')
  select = new EventEmitter<Bet>();

  constructor() {

  }

  public selected(bet: Bet) {
    this.select.emit(bet);
  }

  ngOnInit() {
  }

}
