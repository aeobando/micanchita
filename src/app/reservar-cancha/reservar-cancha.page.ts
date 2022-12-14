import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ICanchas } from '../interfaces/icanchas';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Canchas } from '../models/Canchas';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Reservas } from '../models/Reservas';
import { Usuarios } from '../models/Usuarios';
import { CanchasService } from '../services/canchas.service';


@Component({
  selector: 'app-reservar-cancha',
  templateUrl: './reservar-cancha.page.html',
  styleUrls: ['./reservar-cancha.page.scss'],
})
export class ReservarCanchaPage implements OnInit {
  private id;
  Horas: number;
  Minutos: number;
  canchita: ICanchas;




  handlerMessage = '';
  roleMessage = '';

  constructor(private dataService: CanchasService, private route: ActivatedRoute,
    private alertController: AlertController, private nav: NavController,
    private toastController: ToastController) {

    }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getCanchasById(this.id)
      .subscribe((resp) => {

            this.canchita = resp;

        });

    }


    async presentToast(position: 'top' | 'middle' | 'bottom') {
      const toast = await this.toastController.create({
        message: 'Reserva realizada con exito!',
        duration: 3500,
        position: position,
        icon: 'checkmark-circle-outline'
      });

      await toast.present();
    }


    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Desea confirmar la reserva?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Alert canceled';
            },
          },
          {
            text: 'Si',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Alert confirmed';
              this.presentToast('bottom');
              this.nav.navigateForward('/inicio')
            },
          },
        ],
      });

      await alert.present();


      const { role } = await alert.onDidDismiss();
      this.roleMessage = `Reserva: ${role}`;


    }


}
