import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarrPPageRoutingModule } from './starr-p-routing.module';

import { StarrPPage } from './starr-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarrPPageRoutingModule
  ],
  declarations: [StarrPPage]
})
export class StarrPPageModule {}
