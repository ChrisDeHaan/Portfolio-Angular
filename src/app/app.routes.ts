import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@app/components/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: '**',
    loadComponent: () => import('@app/components/error/error.component').then((m) => m.Error)
  },
];
