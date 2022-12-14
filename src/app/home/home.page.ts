import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuarios:Observable<any>;

  constructor(private dataService: DataService,private router: Router
    /* private menuCtrl:MenuController */) {}
  /* toogleMenu(){
    this.menuCtrl.toggle();
  } */
  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
    localStorage.setItem('tk', null);
    localStorage.setItem('user', null);
  }

  irAlLogin(){
    this.router.navigate(['login'])
   }

}
