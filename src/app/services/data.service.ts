import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { ICanchas } from '../interfaces/icanchas';
import { Observable } from 'rxjs';
import {} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  canchas: Observable<ICanchas[]>
  items: ICanchas[];

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getCanchas(){
    return this.http.get<ICanchas[]>('/assets/data/canchas.json');
  }

  getCanchasFiltro(){
    return this.http.get<ICanchas>('/assets/data/canchas.json');
  }


}
