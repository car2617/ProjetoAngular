import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'historia',
    loadComponent: () => import('./historia/historia.page').then( m => m.HistoriaPage)
  },
  {
    path: 'fotos',
    loadComponent: () => import('./fotos/fotos.page').then( m => m.FotosPage)
  },
  {
    path: 'detalhes',
    loadComponent: () => import('./detalhes/detalhes.page').then( m => m.DetalhesPage)
  },
  {
    path: 'fusca1',
    loadComponent: () => import('./fusca1/fusca1.page').then( m => m.Fusca1Page)
  },
  {
    path: 'fusca2',
    loadComponent: () => import('./fusca2/fusca2.page').then( m => m.Fusca2Page)
  },
  {
    path: 'fusca3',
    loadComponent: () => import('./fusca3/fusca3.page').then( m => m.Fusca3Page)
  },
  {
    path: 'fusca4',
    loadComponent: () => import('./fusca4/fusca4.page').then( m => m.Fusca4Page)
  },
  {
    path: 'fusca5',
    loadComponent: () => import('./fusca5/fusca5.page').then( m => m.Fusca5Page)
  },
  {
    path: 'fusca6',
    loadComponent: () => import('./fusca6/fusca6.page').then( m => m.Fusca6Page)
  },
  {
    path: 'fusca7',
    loadComponent: () => import('./fusca7/fusca7.page').then( m => m.Fusca7Page)
  },
  {
    path: 'fusca6',
    loadComponent: () => import('./fusca6/fusca6.page').then( m => m.Fusca6Page)
  },
  {
    path: 'fusca8',
    loadComponent: () => import('./fusca8/fusca8.page').then( m => m.Fusca8Page)
  },
  {
    path: 'fusca9',
    loadComponent: () => import('./fusca9/fusca9.page').then( m => m.Fusca9Page)
  },
  {
    path: 'confirmado',
    loadComponent: () => import('./confirmado/confirmado.page').then( m => m.ConfirmadoPage)
  },
];
