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
    path: 'princesa',
    loadComponent: () => import('./princesa/princesa.page').then( m => m.PrincesaPage)
  },
  {
    path: 'super',
    loadComponent: () => import('./super/super.page').then( m => m.SuperPage)
  },
  {
    path: 'luigi',
    loadComponent: () => import('./luigi/luigi.page').then( m => m.LuigiPage)
  },
  {
    path: 'yoshi',
    loadComponent: () => import('./yoshi/yoshi.page').then( m => m.YoshiPage)
  },
  {
    path: 'bowser',
    loadComponent: () => import('./bowser/bowser.page').then( m => m.BowserPage)
  },
  {
    path: 'toad',
    loadComponent: () => import('./toad/toad.page').then( m => m.ToadPage)
  },
  {
    path: 'wario',
    loadComponent: () => import('./wario/wario.page').then( m => m.WarioPage)
  },
  {
    path: 'waluigi',
    loadComponent: () => import('./waluigi/waluigi.page').then( m => m.WaluigiPage)
  },
  {
    path: 'princesa',
    loadComponent: () => import('./princesa/princesa.page').then( m => m.PrincesaPage)
  },
  {
    path: 'rosalina',
    loadComponent: () => import('./rosalina/rosalina.page').then( m => m.RosalinaPage)
  },
  {
    path: 'donkey',
    loadComponent: () => import('./donkey/donkey.page').then( m => m.DonkeyPage)
  },
  {
    path: 'diddy',
    loadComponent: () => import('./diddy/diddy.page').then( m => m.DiddyPage)
  },
  {
    path: 'lakitu',
    loadComponent: () => import('./lakitu/lakitu.page').then( m => m.LakituPage)
  },
  {
    path: 'shy',
    loadComponent: () => import('./shy/shy.page').then( m => m.ShyPage)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./sobre/sobre.page').then( m => m.SobrePage)
  },
];
