import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = false;
  public user: User = new User('unknown');

  constructor() {
    this.login(new User('default'));
  }

  public login(user: User) {
    this.user = user;
    this.isLogged = true;
  }
}
