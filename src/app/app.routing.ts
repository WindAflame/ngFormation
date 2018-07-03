import { Routes } from "@angular/router";
import { UsersComponent } from "./user/users/users.component";
import { LoginComponent } from "./login/login.component";
import { BetsComponent } from "./bets/bets/bets.component";
import { AuthentificationGuardService } from "./shared/services/authentification-guard.service";

export const AppRouting: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent, canActivate: [AuthentificationGuardService] },
    { path: 'bets', component: BetsComponent, canActivate: [AuthentificationGuardService] },    
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: 'login' }
]
