import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../interfaces/interfaces';
import { ICanchas } from '../interfaces/icanchas';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [];

  slides: Observable<ICanchas[]>
  constructor(private dataService: DataService) { }

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
