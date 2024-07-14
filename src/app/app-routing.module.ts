import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "./core/guards/auth.guard";
import {UnauthorizedComponent} from "./features/unauthorized/unauthorized.component";

const routes: Routes = [
  { path: 'login',
    loadChildren: () => import('./features/login/login-routing.module').then(m => m.LoginRoutingModule)
  },

  { path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) ,
    canActivate: [authGuard]
  },
  { path: 'unauthorized',
    component: UnauthorizedComponent
  },

  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '**',
    component: UnauthorizedComponent
  } , // Ruta comodín para páginas no encontradas

];

@NgModule({
  imports: [RouterModule.forRoot(routes )],  // Puedes usar { useHash: true } si prefieres el modo hash
  exports: [RouterModule]
})
export class AppRoutingModule { }
