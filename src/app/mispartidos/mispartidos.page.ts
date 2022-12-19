import { Component, OnInit } from '@angular/core';
import { Canchas } from '../models/Canchas';
import { Reservas } from '../models/Reservas';
import { Usuarios } from '../models/Usuarios';

@Component({
  selector: 'app-mispartidos',
  templateUrl: './mispartidos.page.html',
  styleUrls: ['./mispartidos.page.scss'],
})
export class MispartidosPage implements OnInit {
  public reservas: Reservas[] = [];

  constructor() {

    let user = new Usuarios();
      let datauser = {id: 1, nombres: "maribel",
        apellidos:"cardozo", email: "maribel@gmail.com",
        telefono:"313234"
        }
  user.setValues(datauser);

      let cancha = new Canchas();
      let datacancha = {id: 1, nombre: 'Morumbi', descripcion:'Excelente Ubicación', precioHora:'70000', imagen:'../../assets/images/canchas/Morumbi.jpg'};
    cancha.setValues(datacancha);

      let reserva = new Reservas();
     let data2 = {id: 1, usuario:user, cancha:cancha,fecha:'24/12/2022', hora:'20:00'};
      reserva.setValues(data2);
     this.reservas.push(reserva);
     this.reservas.push(reserva);
  }

  ngOnInit() {
  }

}
