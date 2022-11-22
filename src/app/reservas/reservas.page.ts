import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Canchas } from '../interfaces/canchas';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  canchas: Observable<Canchas[]>
  rotateImg = 0;

  constructor(private dataService: DataService) {
   }

  ngOnInit() {
    this.canchas = this.dataService.getCanchas();
  }



}
