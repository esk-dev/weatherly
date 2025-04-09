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
      import('@pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent,
      ),
  },
];
