import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('passwordEyeRegister') passwordEye;
  // Seleccionamos el elemento con el nombre que le pusimos con el #
  passwordTypeInput = 'password';
  // Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
  iconpassword = 'eye-off';
  constructor(public UsuariosService: UsuariosService, private router: Router) {
    localStorage.setItem('tk', null);
    localStorage.setItem('user', null);
   }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })


  }

  // Esta función verifica si el tipo de campo es texto lo cambia a password y viceversa, además verificara el icono si es 'eye-off' lo cambiara a 'eye' y viceversa
  togglePasswordMode() {
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
    this.iconpassword = this.iconpassword === 'eye-off' ? 'eye' : 'eye-off';
    this.passwordEye.el.setFocus();
  }

  Iniciar() {
    let data1: any;
    let inicio: number = 0;
    let data = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }

    this.usuario = new Usuarios();
    this.usuario.setValuesCompletos(data);


    this.UsuariosService.login(this.usuario);


    if (this.variableNula(localStorage.getItem('user'))) {

      data1 = JSON.parse(localStorage.getItem('user'));
      if (this.variableNula(data1?.email)) {
        this.usuario.setValues(data1);
        this.router.navigate(['inicio'])
      } else {
        this.router.navigate(['login'])
      }

    }
}

  variableNula(variable) {
    if (variable == null || variable == undefined || variable == "null" || variable == "undefined") { return false } else { return true }
  }


  irAlInicio() {
    this.router.navigate(['/inicio'])
  }

}
