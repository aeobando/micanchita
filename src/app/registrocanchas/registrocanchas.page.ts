import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CanchasService } from '../services/canchas.service';
import { Canchas } from '../models';
import { ICanchas } from '../interfaces/icanchas';

@Component({
  selector: 'app-registrocanchas',
  templateUrl: './registrocanchas.page.html',
  styleUrls: ['./registrocanchas.page.scss'],
})
export class RegistrocanchasPage implements OnInit {
  cancha: ICanchas = {
    nombre: "",
    descripcion: "",
    precioHora : 0,

  };

  edicion = false;

  constructor(

    private canchasDataService: CanchasService, private router: Router,private alertController: AlertController,
    private actiavtedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actiavtedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get("postId")) {
        this.canchasDataService
          .getCanchasById(paramMap.get("postId"))
          .subscribe((res) => {
            this.cancha = res;
            this.edicion = true;
          });
      }
    });
  }

  GuardarCancha() {
    let vCancha = new Canchas();
    let data = {
      nombre: this.cancha.nombre,
      descripcion:this.cancha.descripcion,
      precioHora:this.cancha.precioHora
    }
    vCancha.setValues(data);
    this.canchasDataService
      .createCanchas(vCancha)
      .subscribe((res) => {
        this.router.navigate(["/canchas"]);
      });
  }

  updatePost() {
    let vCancha = new Canchas();
    let data = {
      nombre: this.cancha.nombre,
      descripcion:this.cancha.nombre,
      precioHora:this.cancha.precioHora
    }
    vCancha.setValues(data);
    this.canchasDataService
      .updateCanchas(this.cancha.id, vCancha)
      .subscribe((res) => {
        console.log(res);
        this.edicion = false;
        this.router.navigate(["/canchas"]);
      });
  }
}
