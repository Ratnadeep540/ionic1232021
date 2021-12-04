import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CURDMEPage } from './curdme.page';

const routes: Routes = [
  {
    path: '',
    component: CURDMEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CURDMEPageRoutingModule {}
