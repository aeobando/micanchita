import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  componentes: Componente[] = [];


  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/images/canchas/Morumbi.jpg',
      titulo: 'Morumbi',
      desc: 'Reservar'
    },
    {
      img: '/assets/images/canchas/Atenas.jpg',
      titulo: 'Atenas',
      desc: 'Reservar'
    },

    {
      img: '/assets/images/canchas/maracana.jpg',
      titulo: 'Maracana',
      desc: 'Reservar'
    },

    {
      img: '/assets/images/canchas/Bombonera.jpg',
      titulo: 'Bombonera',
      desc: 'Reservar'
    }


  ]
  constructor() { }

  slideOpciones = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 100
  };

}
