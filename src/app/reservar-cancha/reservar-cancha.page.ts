import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Canchas } from '../interfaces/canchas';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservar-cancha',
  templateUrl: './reservar-cancha.page.html',
  styleUrls: ['./reservar-cancha.page.scss'],
})
export class ReservarCanchaPage implements OnInit {
  private id;
  canchas: Observable<Canchas[]>
  canchita: any;
  cancho: any;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.canchas = this.dataService.getCanchas();
    this.id = this.route.snapshot.paramMap.get('id');


    this.cancho = this.dataService.getCanchas().subscribe(data => {
      return data.filter((item) => { return item.id == this.id });
    });



    this.canchas.subscribe(data => {
      data.forEach((snap) => {
        if (snap.id == this.id) {
          this.canchita = snap;
          console.log(this.canchita.nombre);
        }
      });
    })











    /* this.canchas.forEach((item)=>{
       if(item["id"] == this.id){
         this.canchita = item
       }
     })*/
  }

}
