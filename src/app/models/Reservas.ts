import { Canchas } from "./Canchas";
import { Usuarios } from "./Usuarios";

export class Reservas {
  id: string;
  usuario: Usuarios;
  cancha: Canchas;
  fecha: Date;
  horas: string;
  minutos: string;


  setValues(data: any){
    this.id = data.id;
    this.usuario = new Usuarios;
    this.usuario.setValues(data.usuario);
    this.cancha = new Canchas;
    this.cancha.setValues(data.cancha);
    this.fecha = data.fecha;
    this.horas = data.hora;
    this.minutos = data.minutos;
  }


}
