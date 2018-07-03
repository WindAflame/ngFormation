import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user')
  user: User;

  @Output('select')
  select: EventEmitter<User> = new EventEmitter<User>();


  constructor() { }

  ngOnInit() {
  }

  public onclick() {
    this.select.emit(this.user);
  }

}
