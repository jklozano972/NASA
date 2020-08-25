import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { API3PageRoutingModule } from './api3-routing.module';
import { SafePipe } from '../../../pipe/safe.pipe';
import { API3Page } from './api3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    API3PageRoutingModule
  ],
  declarations: [API3Page,SafePipe]
})
export class API3PageModule {}
