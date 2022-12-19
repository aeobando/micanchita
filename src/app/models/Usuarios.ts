export class Usuarios {
  id: string;
  nombres: string;
  apellidos:string;
  email: string;
  telefono:string
  password: string;

  setValues(data: any){
    this.id = data.id;
    this.nombres = data.nombres;
    this.apellidos=data.apellidos;
    this.email = data.email;
    this.telefono = data.telefono;
  }


  setValuesCompletos(data: any){
    this.id = data.id;
    this.nombres = data.nombres;
    this.apellidos=data.apellidos;
    this.email = data.email;
    this.telefono = data.telefono;
    this.password = data.password;
  }


}
