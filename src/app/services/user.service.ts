import { Injectable } from '@angular/core';
import { GenericUserService } from '../genericservices/generic-user-service';
import { User } from '../models/user';

@Injectable()
export class UserService extends GenericUserService {

  constructor() {
    super();
  }

  public addUser(user: User) { this.users.push(user); }
}
