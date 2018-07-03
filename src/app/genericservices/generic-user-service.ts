import { User } from "../models/user";

export abstract class GenericUserService {

    protected users: User[] = [];
  
    public getUsers(): User[] { return this.users; }
    abstract addUser(user: User);
    abstract delUser(user: User);
}
