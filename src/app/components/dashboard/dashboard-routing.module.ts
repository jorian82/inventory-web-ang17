/**
 *  Created by jorian for SSDE Inc
 *  on Tue Apr 02, 2024 at 15:28
 *  project: inventory-ui
 *  file: dashboard-routing.module
 */

import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./pages/dashboard.component";
import {NgModule} from "@angular/core";

const dashboardRouting: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./router-child.module').then( m => m.DashboardRouterChildModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(dashboardRouting)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
