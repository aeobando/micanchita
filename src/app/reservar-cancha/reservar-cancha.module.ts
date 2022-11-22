import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservarCanchaPageRoutingModule } from './reservar-cancha-routing.module';

import { ReservarCanchaPage } from './reservar-cancha.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservarCanchaPageRoutingModule,
    ComponentsModule

  ],
  declarations: [ReservarCanchaPage]
})
export class ReservarCanchaPageModule {}
