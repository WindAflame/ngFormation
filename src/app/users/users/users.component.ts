import { Component, OnInit } from '@angular/core';
import { GenericUserService } from '../../genericservices/generic-user-service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public filter: string = '';

  constructor(
    private $userService : GenericUserService
  ) { }

  ngOnInit(){}

  private $addUser(name: string) : void { this.$userService.addUser( new User(name) ); }
  public toggleHighlight(user: User) { user.hightlight = !user.hightlight; }
  public setFilter(name : string) { this.filter = name; }
  public delete(user: User) { this.$userService.delUser(user); }
}
