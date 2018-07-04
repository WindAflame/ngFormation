import { HttpClient } from '@angular/common/http';
import { Bet } from './../models/bet';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { GenericUserService } from '../genericservices/generic-user-service';

@Injectable({
  providedIn: 'root'
})
export class UserRestService extends GenericUserService {

  constructor(private http: HttpClient) {
    super();
  }

  addUser(user: User) {


  }
  getAllBets(): Array<Bet> {

    return;
  }

}
