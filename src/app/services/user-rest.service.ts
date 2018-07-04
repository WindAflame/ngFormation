import { Observable } from 'rxjs';
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


  getAllBets(): Bet[] | Promise<Bet[]> | Observable<Bet[]> {
    return [];
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://192.168.153.101:10000/bets');
  }


}
