import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservarCanchaPage } from './reservar-cancha.page';

const routes: Routes = [
  {
    path: '',
    component: ReservarCanchaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarCanchaPageRoutingModule {}
