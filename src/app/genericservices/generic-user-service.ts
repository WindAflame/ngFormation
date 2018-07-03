import { Bet } from './../models/bet';
import { User } from './../models/user';
export abstract class GenericUserService {
    protected users: Array<User> = new Array<User>();
    abstract addUser(user: User);
    abstract getAllBets(): Array<Bet>;

}
