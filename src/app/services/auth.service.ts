import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: boolean;
  public user: User = new User('unknown');

  constructor() { }

  public login(user: User) {
    this.user = user;
    this.isLogged = true;
  }
}
