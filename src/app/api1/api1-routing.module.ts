import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { API1Page } from './api1.page';

const routes: Routes = [
  {
    path: '',
    component: API1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class API1PageRoutingModule {}
