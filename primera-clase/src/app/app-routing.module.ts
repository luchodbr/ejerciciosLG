import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './Ejercicio02/bienvenida/bienvenida.component';
import { ErrorComponent } from './Ejercicio02/error/error.component';
import { LoginComponent } from './Ejercicio02/login/login.component';

const routes: Routes = 
[
  {path:'login', component : LoginComponent},
  {path:'bienvenida',component:BienvenidaComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
