import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuarios } from '../models/Usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  public form: FormGroup;
  public usuario: Usuarios;
  @ViewChild('passwordEyeRegister') passwordEye;
  // Seleccionamos el elemento con el nombre que le pusimos con el #
  passwordTypeInput = 'password';
  // Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
  iconpassword = 'eye-off';
  constructor(public UsuariosService: UsuariosService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      telefono: new FormControl(''),
      password: new FormControl('')
    })
  }

  // Esta función verifica si el tipo de campo es texto lo cambia a password y viceversa, además verificara el icono si es 'eye-off' lo cambiara a 'eye' y viceversa
  togglePasswordMode() {
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
    this.iconpassword = this.iconpassword === 'eye-off' ? 'eye' : 'eye-off';
    this.passwordEye.el.setFocus();
  }

  Guardar() {
    let data = {
      nombres: this.form.get('nombres').value,
      apellidos: this.form.get('apellidos').value,
      email: this.form.get('email').value,
      telefono: this.form.get('telefono').value,
      password: this.form.get('password').value
    }
    console.log("nombre: " + this.form.get('nombres').value)
    this.usuario = new Usuarios();
    this.usuario.setValuesCompletos(data);
    this.UsuariosService.create(this.usuario);

    this.irAlLogin();
  }
  irAlLogin() {
    this.router.navigate(['login']);
  }
}
