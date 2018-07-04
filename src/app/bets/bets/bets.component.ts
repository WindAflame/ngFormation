import { BetFormTemplateComponent } from './../bet-form-template/bet-form-template.component';
import { Bet } from './../../models/bet';
import { Component, OnInit, Output, EventEmitter, ViewChild, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericUserService } from '../../genericservices/generic-user-service';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { deserializeArray } from 'class-transformer';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {

  @ViewChild('betEditor')
  betEditor: BetFormTemplateComponent;

  private users: Observable<User[]>;

  constructor(
    public userService: GenericUserService
  ) { }

  ngOnInit() {

    this.users = this.userService.getAllUsers() as Observable<User[]>;

  }


  public addBet(bet: Bet) {
    this.userService.addBet(bet);
  }


  public showDetails(bet: Bet) {

  }

}
