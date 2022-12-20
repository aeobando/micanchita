import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrocanchasPage } from './registrocanchas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrocanchasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrocanchasPageRoutingModule {}
