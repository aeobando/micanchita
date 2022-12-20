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

    return this.http.post<Usuarios>(this.urlServer, data).subscribe();
 }

 login(data: Usuarios){

  return this.http.post<Usuarios>(this.urlServer + '/login', data).subscribe((res: any)=>{
    localStorage.setItem('tk', null);
    localStorage.setItem('user', null);

    if(res.token){
      localStorage.setItem('tk', res.token);
      localStorage.setItem('user', JSON.stringify(res.data));

    }
  });
}

}
