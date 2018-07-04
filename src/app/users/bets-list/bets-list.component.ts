import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bet } from '../../models/bet';
import { User } from '../../models/user';
import { deserialize } from 'class-transformer';

@Component({
  selector: 'app-bets-list',
  templateUrl: './bets-list.component.html',
  styleUrls: ['./bets-list.component.css']
})
export class BetsListComponent implements OnInit {

  private bets: Bet[] = [];
  private user: User;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.data.subscribe( p => {
      /*
      const u: User = deserialize(User,p.user);
      this.bets = u.getBets();
      */
     this.user = p.user;
    });

  }

}
