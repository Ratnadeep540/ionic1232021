import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestapiPagePageRoutingModule } from './restapi-page-routing.module';

import { RestapiPagePage } from './restapi-page.page';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestapiPagePageRoutingModule,
    HttpClientModule
  ],
  declarations: [RestapiPagePage]
})
export class RestapiPagePageModule {}
