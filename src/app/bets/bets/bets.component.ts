import { BetFormTemplateComponent } from './../bet-form-template/bet-form-template.component';
import { Bet } from './../../models/bet';
import { Component, OnInit, Output, EventEmitter, ViewChild, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericUserService } from '../../genericservices/generic-user-service';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {

  @ViewChild('betEditor')
  betEditor: BetFormTemplateComponent;



  private bets: Array<Bet>;

  constructor(
    public userService: GenericUserService

  ) { }

  ngOnInit() {
  }


  public addBet() {
  }


  public showDetails(bet: Bet) {

  }

}
