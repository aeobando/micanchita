import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MispartidosPageRoutingModule } from './mispartidos-routing.module';

import { MispartidosPage } from './mispartidos.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MispartidosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MispartidosPage]
})
export class MispartidosPageModule {}
