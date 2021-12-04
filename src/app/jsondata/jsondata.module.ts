import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsondataPageRoutingModule } from './jsondata-routing.module';

import { JsondataPage } from './jsondata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsondataPageRoutingModule
  ],
  declarations: [JsondataPage]
})
export class JsondataPageModule {}
