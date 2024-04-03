/**
 *  Created by jorian for SSDE Inc
 *  on Tue Apr 02, 2024 at 15:32
 *  project: inventory-ui
 *  file: router-child.module
 */
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {NgModule} from "@angular/core";
import {ListCategoriesComponent} from "../category/pages/list-categories/list-categories.component";

export const dashboardChildRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: ListCategoriesComponent }
]

@NgModule({
  imports: [RouterModule.forChild(dashboardChildRoutes)],
  exports: [RouterModule]
})
export class DashboardRouterChildModule{}
