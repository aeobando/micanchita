import { Component, OnInit } from '@angular/core';
import { CanchasService } from '../services/canchas.service';
import { Router } from '@angular/router';
import { Canchas } from '../models';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.page.html',
  styleUrls: ['./canchas.page.scss'],
})
export class CanchasPage implements OnInit {
  canchas: Observable<Canchas[]>

  API = "localhost:8100";
  constructor(private canchasDataService: CanchasService, private router: Router,private alertController: AlertController) { }


  ngOnInit() {
    this.CargarCanchas();
  }

  CargarCanchas() {
    this.canchas =  this.canchasDataService.getCanchas();
  }

  ionViewWillEnter(){
    this.CargarCanchas();
  }

  async EliminarCanchas(id: string) {
    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Eliminación de cancha",
      message: "¿Realmente desea eliminar la cancha?",
      buttons: [
        "Cancel",
        {
          text: "Okay",
          handler: () => {
            this.canchasDataService.removeCanchas(id).subscribe(
              (res) => {
                console.log(res);
                this.CargarCanchas();
              },
              (err) => console.log(err)
            );
          },
        },
      ],
    });

    await alert.present();
  }

}
