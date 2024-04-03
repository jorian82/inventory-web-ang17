/**
 *  Created by jorian for SSDE Inc
 *  on Tue Apr 02, 2024 at 15:32
 *  project: inventory-ui
 *  file: router-child.module
 */
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {NgModule} from "@angular/core";

export const dashboardChildRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forChild(dashboardChildRoutes)],
  exports: [RouterModule]
})
export class DashboardRouterChildModule{}
