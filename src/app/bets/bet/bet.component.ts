import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bet } from '../../shared/models/bet';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  @Input()
  public bet: Bet;

  @Input('index')
  index: number;

  @Output('select')
  select = new EventEmitter<Bet>();

  constructor() { }

  ngOnInit() {
  }

  public onSelect(bet: Bet) {
    this.select.emit(bet);
  }

}
