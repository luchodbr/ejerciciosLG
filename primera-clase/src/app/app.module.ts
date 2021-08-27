import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Ejercicio02/login/login.component';
import { Ejercicio01Component } from './ejercicio01/ejercicio01.component';
import { BienvenidaComponent } from './Ejercicio02/bienvenida/bienvenida.component';
import { ErrorComponent } from './Ejercicio02/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Ejercicio01Component,
    BienvenidaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
