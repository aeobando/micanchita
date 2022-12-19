import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { create } from 'domain';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../models/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
public urlServer = environment.url + '/usuarios';

constructor(public http: HttpClient) {



 }


 create(data: Usuarios) {

  console.log("Prueba1");
    return this.http.post<Usuarios>(this.urlServer, data).subscribe();
 }

}
