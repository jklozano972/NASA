import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { API1PageRoutingModule } from './api1-routing.module';

import { API1Page } from './api1.page';
import { SafePipe } from '../pipe/safe.pipe';
//import { MainPipe } from '../main-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    API1PageRoutingModule
  ],
  declarations: [API1Page, SafePipe]
})
export class API1PageModule {}
