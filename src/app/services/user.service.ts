import { Bet } from './../models/bet';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { GenericUserService } from '../genericservices/generic-user-service';

@Injectable()
export class UserService extends GenericUserService {


  constructor() {
    super();

    const bet1 = new Bet(1000, 'Team Liquid', 'SK Telecom T1');
    const bet2 = new Bet(1000, 'Team Liquid', 'Jin Air Green Wings');
    const bet3 = new Bet(1000, 'Millenium', 'SK Telecom T1');
    const bet4 = new Bet(1000, 'Jin Air Green Wings', 'SK Telecom T1');

    const u1 = new User('John');
    u1.addBet(bet1);
    const u2 = new User('Doe');
    u2.addBet(bet2);
    const u3 = new User('Kayzer');
    u3.addBet(bet3);
    const u4 = new User('Soze');
    u4.addBet(bet4);

    this.users.push(u1);
    this.users.push(u2);
    this.users.push(u3);
    this.users.push(u4);
  }

  addUser(user: User) {
    this.users.push(user);
  }


  getAllBets(): Bet[] {
    const allBets = new Array<Bet>();
    this.users.forEach(
      (u) => u.getBets().forEach(b => {
        allBets.push(b);
      })
    );
    return allBets;
  }


}
