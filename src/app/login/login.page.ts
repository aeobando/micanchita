import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuarios } from '../models/Usuarios';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form: FormGroup;
  public usuario: Usuarios;
  constructor(public UsuariosService: UsuariosService,private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
     })
  }

  Iniciar(){
    let inicio: number = 0;
    let data = {
                  email: this.form.get('email').value,
                  password: this.form.get('password').value
                }

    this.usuario = new Usuarios();
    this.usuario.setValuesCompletos(data);
    this.UsuariosService.login(this.usuario,inicio=inicio);

    let data1: any;
    if (localStorage.getItem('user')){

      data1 = JSON.parse(localStorage.getItem('user'));

        if (data1?.email){
          this.usuario.setValues(data1);
          console.log("ingreso");
        }
      }else {
        console.log("No ingreso");
        this.router.navigate(['login'])
      }


  }


  irAlInicio(){
    this.router.navigate(['/inicio'])
     }

}
