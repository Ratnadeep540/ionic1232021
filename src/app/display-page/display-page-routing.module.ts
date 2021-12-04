import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayPagePage } from './display-page.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayPagePageRoutingModule {}
