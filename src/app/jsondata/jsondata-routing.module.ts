import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsondataPage } from './jsondata.page';

const routes: Routes = [
  {
    path: '',
    component: JsondataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsondataPageRoutingModule {}
