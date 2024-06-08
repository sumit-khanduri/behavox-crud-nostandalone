import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {checkSessionGuard} from "./check-session.guard";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'associate',
    canActivateChild: [checkSessionGuard],
    loadChildren: () => import('./associate/associate.module').then(m => m.AssociateModule)
  },
  {
    path: 'login',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
