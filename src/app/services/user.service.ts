import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { GenericUserService } from '../genericservices/generic-user-service';

@Injectable()
export class UserService extends GenericUserService {

  constructor() {
    super();

    this.users.push(new User('John'));
    this.users.push(new User('Doe'));
    this.users.push(new User('Kayzer'));
    this.users.push(new User('Soze'));
  }

  addUser(user: User) {
    this.users.push(user);
  }

  getAllBets() {
  }
}
