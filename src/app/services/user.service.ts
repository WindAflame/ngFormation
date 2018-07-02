import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  //3 (Other way to bind Service in module) :
  providedIn: 'root'
})
export class UserService {

  private users: User[];

  constructor() {
    this.users = [];
  }

  public getUsers(): User[] { return this.users; }
  public addUser(user: User) { this.users.push(user); }
}
