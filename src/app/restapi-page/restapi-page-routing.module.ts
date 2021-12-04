import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestapiPagePage } from './restapi-page.page';

const routes: Routes = [
  {
    path: '',
    component: RestapiPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestapiPagePageRoutingModule {}
