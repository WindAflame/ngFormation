import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private $auth: boolean = false;
  private $username: string = '';

  constructor() { }

  public connect(username: string) {
    this.$username = username;
    this.$auth = true;
  }
  public disconnect() {
    this.$username = '';
    this.$auth = false;
  }
  public isConnect(): boolean { return this.$auth; }
  public getUserInfo(): string { return this.$username; }

}
