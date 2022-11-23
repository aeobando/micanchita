import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarcuentaPageRoutingModule } from './recuperarcuenta-routing.module';

import { RecuperarcuentaPage } from './recuperarcuenta.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarcuentaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecuperarcuentaPage]
})
export class RecuperarcuentaPageModule {}
