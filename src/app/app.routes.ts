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
];
