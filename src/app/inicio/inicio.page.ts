import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../interfaces/interfaces';
import { ICanchas } from '../interfaces/icanchas';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Canchas } from '../models';
import { Usuarios } from '../models/Usuarios';
import { Router } from '@angular/router';
import { CanchasService } from '../services/canchas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public canchas: Canchas[] = [];
  public usuario: Usuarios = new Usuarios;

  componentes: Componente[] = [];

  slides: Observable<ICanchas[]>
  constructor(private canchasDataService: CanchasService, private router: Router) {
    let data: any;
    if (localStorage.getItem('user')) {

      data = JSON.parse(localStorage.getItem('user'));

      if (data?.email) {
        this.usuario.setValues(data);
      }
    } else {
      this.router.navigate(['login'])
    }
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
    spaceBetweenView: 10,
    speed: 400
  }


  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true

  }



  ngOnInit() {
    this.slides = this.canchasDataService.getCanchas();
  }

}
