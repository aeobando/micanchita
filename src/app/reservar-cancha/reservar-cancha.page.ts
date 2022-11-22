import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ICanchas } from '../interfaces/icanchas';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Canchas } from '../models/canchas';


@Component({
  selector: 'app-reservar-cancha',
  templateUrl: './reservar-cancha.page.html',
  styleUrls: ['./reservar-cancha.page.scss'],
})
export class ReservarCanchaPage implements OnInit {
  private id;
  month: string;
  year: number;
  canchita: ICanchas;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getCanchas()
      .subscribe((resp) => {
        resp.forEach((snap) => {
          if (snap.id == this.id) {
            this.canchita = snap;
            console.log(this.canchita.nombre);
          }
        });

      });

    }
}
