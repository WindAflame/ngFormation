import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
