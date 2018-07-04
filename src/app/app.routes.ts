import { Routes } from "@angular/router";
import { LoginComponent } from "./public/login/login.component";
import { UsersComponent } from "./users/users/users.component";
import { LoginGuard } from "./guards/login.guard";
import { BetsComponent } from "./bets/bets/bets.component";
import { ErrorComponent } from "./public/error/error.component";
import { BetsListComponent } from "./users/bets-list/bets-list.component";
import { BetsListResolverService } from "./resolvers/bets-list-resolver.service";

export const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: LoginComponent },
    {
        path: 'users', 
        component: UsersComponent, 
        canActivate: [LoginGuard],
        children: [
            {
                path: ':uname',
                component: BetsListComponent,
                resolve: {
                    user: BetsListResolverService
                }
            }
        ]
    },
    { path: 'bets', component: BetsComponent, canActivate: [LoginGuard] },
  
  
    { path: '**', component: ErrorComponent }
  ];