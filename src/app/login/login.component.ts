import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../shared/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthentificationService
  ) { }

  ngOnInit() {
  }

  public onLogin(username: string) {
    this.authService.connect(username);
  }

}
