import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import {Component} from '@angular/core';
//import {ContentContainerComponentHarness} from '@angular/cdk/testing';
import {MatSidenavModule} from '@angular/material/sidenav';
import { IonicModule } from '@ionic/angular';
import {MatToolbarModule} from '@angular/material/toolbar';

import { CURDMEPageRoutingModule } from './curdme-routing.module';

import { CURDMEPage } from './curdme.page';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //LayoutModule,
    CURDMEPageRoutingModule,
    MatSidenavModule,
    MatToolbarModule
    //ContentContainerComponentHarness
    //Component
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [CURDMEPage]
})
export class CURDMEPageModule {}
