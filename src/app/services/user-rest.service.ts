import { Injectable } from '@angular/core';
import { GenericUserService } from '../genericservices/generic-user-service';
import { Bet } from '../models/bet';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { deserializeArray } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class UserRestService extends GenericUserService {

  private url: string = 'http://192.168.153.101:10000/bets';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    super();
    /*
    this.httpClient.get(this.url)
      .subscribe((users: User[]) => {
        
        for( let user of users) {          

          // Si le nom existe
          if (!!user.name) {
            let objectUser = this.users.find(u => u.name === user.name);
            // Si l'utilisateur n'existe pas
            if (!objectUser){
              // Création d'un utilisateur
              objectUser = new User(user.name);
              //this.users.push(user); Fonctionne Why mais plus de fonction
              this.users.push(objectUser);
            }
            // Ajouts des paris pour l'utilisateur
            if (user['bets']){
              for(let bet of user['bets']) {
                this.users
                  .find( user => user.name === objectUser.name )
                  .addBet(bet);
              }
            }
          }

        } 

        console.log(JSON.stringify(this.users))
        
    });
    */
        

    this.httpClient.get(this.url)
      .map(res => JSON.stringify(res))
      .subscribe( res => {
        this.users = deserializeArray(User, res);
      })

  }

  addBet(bet: Bet) {
    const user = this.authService.user;
    let u = this.users.find(u => u.name === user.name);
    if (u){
      console.log(JSON.stringify(this.users.find(u => u.name === user.name)))
      this.users.find(u => u.name === user.name).addBet(bet);
      
      console.log(JSON.stringify(this.users.find(u => u.name === user.name)))
    } else {
      console.log('Not Find')
      user.addBet(bet);
      this.users.push(user);
    }

    this.httpClient.post(this.url,this.users.find(u => u.name === user.name)).subscribe((res)=>{
      console.log(JSON.stringify(res));
    })
  }
  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

}
