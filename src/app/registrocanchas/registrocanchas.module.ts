import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrocanchasPageRoutingModule } from './registrocanchas-routing.module';

import { RegistrocanchasPage } from './registrocanchas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrocanchasPageRoutingModule
  ],
  declarations: [RegistrocanchasPage]
})
export class RegistrocanchasPageModule {}
