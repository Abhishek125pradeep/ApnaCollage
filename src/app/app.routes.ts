import { Routes } from '@angular/router';
import { LearnparamsComponent } from './learnparams/learnparams.component';

export const routes: Routes = [

{path:"", redirectTo:'route', pathMatch:'full'},
{path: "route/:id", component : LearnparamsComponent}

];
