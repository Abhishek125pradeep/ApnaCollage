import { Routes } from '@angular/router';
import { LearnparamsComponent } from './learnparams/learnparams.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

    { path: "", redirectTo: 'login', pathMatch: 'full' },
    { path: "route/:id", component: LearnparamsComponent },
    { path: "login", component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent }

];
