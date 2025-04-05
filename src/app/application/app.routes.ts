import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: '',
    loadComponent: () =>
      import('@pages/weather-dashboard/weather-dashboard.component').then(
        (c) => c.WeatherDashboardComponent,
      ),
  },
];
