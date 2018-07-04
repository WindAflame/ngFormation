import { Injectable, OnInit } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Bet } from '../models/bet';
import { Observable } from 'rxjs';
import { GenericUserService } from '../genericservices/generic-user-service';
import { User } from '../models/user';

import 'rxjs/add/operator/find';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

@Injectable({
  providedIn: 'root'
})
export class BetsListResolverService implements Resolve<User>, OnInit {

  constructor(
    private userService: GenericUserService
  ) { }

  ngOnInit(){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {

    const o = (this.userService.getAllUsers() as Observable<User[]>)
    .mergeMap(res => res)
    .find( user => user.name === route.params['uname'] )
    
    return o;
  } 

}
