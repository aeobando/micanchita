import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { ICanchas } from '../interfaces/icanchas';
import { CanchasService } from '../services/canchas.service';
import { Canchas } from '../models';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  canchas: Observable<Canchas[]>
  rotateImg = 0;

  constructor(private CanchasdataService: CanchasService) {
   }

  ngOnInit() {
    this.canchas = this.CanchasdataService.getCanchas();
  }



}
