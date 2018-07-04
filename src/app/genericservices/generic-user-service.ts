import { Bet } from './../models/bet';
import { User } from './../models/user';
import { Observable } from 'rxjs';

export abstract class GenericUserService {
    protected users: Array<User> = new Array<User>();
    abstract addBet(bet: Bet);
    abstract getAllUsers(): Array<User> | Observable<User[]>;

}
