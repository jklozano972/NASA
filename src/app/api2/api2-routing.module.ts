import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { API2Page } from './api2.page';

const routes: Routes = [
  {
    path: '',
    component: API2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class API2PageRoutingModule {}
