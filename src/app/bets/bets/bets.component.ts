import { Component, OnInit } from '@angular/core';
import { Bet } from '../../shared/models/bet';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {

  private bets: Array<Bet> = new Array<Bet>();

  constructor(
    private $userService: UserService
  ) { }

  ngOnInit() {
  }

  public showDetails(bet: Bet) {}

}
