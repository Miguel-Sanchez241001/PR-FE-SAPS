import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./features/login/login-routing.module').then(m => m.LoginRoutingModule) },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
