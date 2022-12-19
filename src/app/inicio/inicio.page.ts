import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../interfaces/interfaces';
import { ICanchas } from '../interfaces/icanchas';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Canchas } from '../models';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public canchas: Canchas[] = [];

  componentes: Componente[] = [];

  slides: Observable<ICanchas[]>
  constructor(private dataService: DataService) {
    let cancha = new Canchas();
    let data =  {id: 1,nombre: "Morumbi", descripcion:"Excelente Ubicación", precioHora:"70000", imagen:"../../assets/images/canchas/Morumbi.jpg"}

    cancha.setValues({data})

  }

  slideOpciones = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 100
  };
  options = {
    slidesPerView: 1.5,
    centered: true,
    spaceBetweenView:10,
    speed:400
  }


  sliderOptions ={
  initialSlide: 0,
  slidesPerView: 1,
  autoplay: true

  }



  ngOnInit() {
    this.slides = this.dataService.getCanchas();
  }

}
