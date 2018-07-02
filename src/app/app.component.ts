import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { GenericUserService } from './genericservices/generic-user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private $title = 'app';
  private $user: User = new User('John');
  public filter: string = '';

  constructor(
    private $userService : GenericUserService
  ) { }

  private $addUser(name: string) : void { this.$userService.addUser( new User(name) ); }
  private $onClick(event: MouseEvent): void { console.log(event); }
  public toggleHighlight(user: User) { user.hightlight = !user.hightlight; }
  public setFilter(name : string) { this.filter = name; }
}
