import { Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/pages/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   loadChildren: () => import('./components/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
  // },
];
