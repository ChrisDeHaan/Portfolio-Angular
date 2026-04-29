import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@app/components/home/home').then((m) => m.Home)
  },
  {
    path: '**',
    loadComponent: () => import('@app/components/error/error').then((m) => m.Error)
  },
];
