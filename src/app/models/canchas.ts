export class Canchas {
  id: string;
  nombre: string;
  descripcion:string;
  precioHora: number;
  imagen?:string;

  setValues(data: any){
    this.id = data.id;
    this.nombre = data.nombre;
    this.descripcion=data.descripcion;
    this.precioHora = data.precioHora;
    //this.imagen = data.imagen;
  }


}
