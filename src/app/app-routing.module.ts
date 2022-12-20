import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'mispartidos',
    loadChildren: () => import('./mispartidos/mispartidos.module').then( m => m.MispartidosPageModule)
  },
  {
    path: 'reservar-cancha/:id',
    loadChildren: () => import('./reservar-cancha/reservar-cancha.module').then( m => m.ReservarCanchaPageModule)
  },
  {
    path: 'recuperarcuenta',
    loadChildren: () => import('./recuperarcuenta/recuperarcuenta.module').then( m => m.RecuperarcuentaPageModule)
  },
  {
    path: 'canchas',
    loadChildren: () => import('./canchas/canchas.module').then( m => m.CanchasPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
