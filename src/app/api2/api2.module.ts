import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { API2PageRoutingModule } from './api2-routing.module';

import { API2Page } from './api2.page';
import { SafePipe } from '../pipe/safe.pipe';
//import { MainPipe } from '../main-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    API2PageRoutingModule
  ],
  declarations: [API2Page, SafePipe]
})
export class API2PageModule {}
