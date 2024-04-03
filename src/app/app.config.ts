import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withDebugTracing, withHashLocation} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {DashboardRouterChildModule} from "./components/dashboard/router-child.module";
import {DashboardRoutingModule} from "./components/dashboard/dashboard-routing.module";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
        routes,
        withDebugTracing(),
        withHashLocation()
    ),
    importProvidersFrom(DashboardRoutingModule),
    importProvidersFrom(DashboardRouterChildModule),
    provideClientHydration(), provideAnimationsAsync()
  ]
};
