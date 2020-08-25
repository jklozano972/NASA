import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'api1',
    loadChildren: () => import('./api1/api1.module').then( m => m.API1PageModule)
  },
  {
    path: 'api2',
    loadChildren: () => import('./api2/api2.module').then( m => m.API2PageModule)
  },
  {
    path: 'api3',
    loadChildren: () => import('./src/app/api3/api3.module').then( m => m.API3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
