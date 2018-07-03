import { Injectable } from '@angular/core';
import { GenericCrud } from './generic-crud';
import { User } from '../models/user';
import { Bet } from '../models/bet';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericCrud<User> {

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

    this.add(u1);
    this.add(u2);
    this.add(u3);
    this.add(u4);
  }

  public add(item: User): void { 
    this.data.push(item);
  };
  public del(item: User): void {
    const indexToDel = this.data.indexOf(item);
    this.data.splice(indexToDel,1);
  };
  public getAll(): Array<User> { return this.data; };

}
