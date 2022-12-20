import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrocanchasPageRoutingModule } from './registrocanchas-routing.module';

import { RegistrocanchasPage } from './registrocanchas.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RegistrocanchasPageRoutingModule
  ],
  declarations: [RegistrocanchasPage]
})
export class RegistrocanchasPageModule {}
