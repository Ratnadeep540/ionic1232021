import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayPagePageRoutingModule } from './display-page-routing.module';

import { DisplayPagePage } from './display-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayPagePageRoutingModule
  ],
  declarations: [DisplayPagePage]
})
export class DisplayPagePageModule {}
