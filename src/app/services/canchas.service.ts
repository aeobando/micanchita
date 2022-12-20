import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICanchas } from '../interfaces/icanchas';
import { HttpClient } from '@angular/common/http';
import { Canchas } from '../models';


@Injectable({
  providedIn: 'root'
})
export class CanchasService {
  public urlServer = environment.url + '/canchas';


  canchas: Observable<ICanchas[]>
  items: ICanchas[];
  constructor(private http: HttpClient) { }

  getCanchas(){
    return this.http.get<Canchas[]>(this.urlServer);
  }

  createCanchas(data: Canchas) {
    return this.http.post<Canchas>(this.urlServer, data).subscribe();
  }

  removeCanchas(id: string) {
    return this.http.delete<Canchas>(this.urlServer + '/${id}');
  }

  getCanchasById(id: string) {
    return this.http.get<Canchas>(this.urlServer + '/${id}');
  }

  updateCanchas(id: string, data: Canchas) {
    return this.http.put(this.urlServer + '/${id}', data);
  }


}
