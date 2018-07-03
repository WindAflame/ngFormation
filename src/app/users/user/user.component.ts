import { Component, OnInit, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private previousColor: string;

  @Input()
  public user: User;

  @Input()
  public index: number;

  @Output()
  public select: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  public delete: EventEmitter<User> = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onSelect() { this.select.emit(this.user); }
  public onDelete() { this.delete.emit(this.user); }

}
