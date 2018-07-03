import { Bet } from './../../models/bet';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericUserService } from '../../genericservices/generic-user-service';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {


  private bets: Array<Bet>;

  constructor(
    public userService: GenericUserService,
    public authServuce: AuthService
  ) { }

  ngOnInit() {
  }


  public showDetails(bet: Bet) {

  }

  public onNewBet(bet: Bet) {
    /*
    const searchUser = this.userService.users.find( u => u.name === AuthService.name);
    let user;
    if ( searchUser ) { user = searchUser; }
    else { user = new User( AuthService.name ); }
    user.addBet(bet);
    this.userService.addUser( user );
    */
  }

}
