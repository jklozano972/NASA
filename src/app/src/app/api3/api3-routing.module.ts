import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { API3Page } from './api3.page';

const routes: Routes = [
  {
    path: '',
    component: API3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class API3PageRoutingModule {}
