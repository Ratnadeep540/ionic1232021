import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BootstraptutPageRoutingModule } from './bootstraptut-routing.module';

import { BootstraptutPage } from './bootstraptut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BootstraptutPageRoutingModule
  ],
  declarations: [BootstraptutPage]
})
export class BootstraptutPageModule {}
