import { Bet } from './../../models/bet';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {


  private bets: Array<Bet>;

  constructor(

  ) { }

  ngOnInit() {
  }


  public showDetails(bet: Bet) {

  }

}
