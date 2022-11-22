import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPage } from './inicio.page';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
