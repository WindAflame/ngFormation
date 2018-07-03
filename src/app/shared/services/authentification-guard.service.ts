import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthentificationService
  ) { }

  canActivate(): boolean {
    return this.authService.isConnect();
  }
  
}
