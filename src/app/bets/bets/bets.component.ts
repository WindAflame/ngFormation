import { User } from './../../models/user';
import { BetFormTemplateComponent } from './../bet-form-template/bet-form-template.component';
import { Bet } from './../../models/bet';
import { Component, OnInit, Output, EventEmitter, ViewChild, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericUserService } from '../../genericservices/generic-user-service';
import { deserializeArray } from 'class-transformer';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {

  @ViewChild('betEditor')
  betEditor: BetFormTemplateComponent;

  users: Observable<User[]>;

  private bets: Array<Bet>;

  constructor(
    public userService: GenericUserService

  ) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers() as Observable<User[]>;

    (this.userService.getAllUsers() as Observable<User[]>)
      .mergeMap(res => res)
      .map((o: any) => new User(o.name, false))
      .subscribe(res => {
        console.log(res);
      });

    (this.userService.getAllUsers() as Observable<User[]>)
      .subscribe(res => {
        const users = deserializeArray(User, JSON.stringify(res));

        // const us = new Array<User>();
        // Object.assign(us, res);

        console.log(users);
      });
  }


  public addBet() {
    this.betEditor.openModal().then(bet => {
      this.userService.addBet(bet);
    });

  }


  public showDetails(bet: Bet) {

  }

}
