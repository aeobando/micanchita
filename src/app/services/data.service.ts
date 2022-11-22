import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { Canchas } from '../interfaces/canchas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  canchas: Observable<Canchas[]>
  items: Canchas[];

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getCanchas(): Observable<Canchas[]>{
    return this.http.get<Canchas[]>('/assets/data/canchas.json');
  }


}
