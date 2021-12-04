import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarrPPage } from './starr-p.page';

const routes: Routes = [
  {
    path: '',
    component: StarrPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarrPPageRoutingModule {}
