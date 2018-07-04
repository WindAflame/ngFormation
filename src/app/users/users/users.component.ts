import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { GenericUserService } from '../../genericservices/generic-user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'app';
  filter = '';
  color = 'yellow';




  constructor(
    public userService: GenericUserService,
    public router: Router
  ) {

  }

  ngOnInit() {
    this.userService.getAllUsers();
  }


  public addUser(event: MouseEvent, name: string) {
    this.userService.addUser(new User(name));
  }

  public highlight(user: User) {
    // user.highlight = !user.highlight;

    this.router.navigate(['users/'+user.name])
  }

  public onFilterChange(filter: string) {
    this.filter = filter;
  }

}
