import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit() {
  }


  irAlLogin(){
    this.router.navigate(['login']);
     }
}
