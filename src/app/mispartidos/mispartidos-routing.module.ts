import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MispartidosPage } from './mispartidos.page';

const routes: Routes = [
  {
    path: '',
    component: MispartidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MispartidosPageRoutingModule {}
