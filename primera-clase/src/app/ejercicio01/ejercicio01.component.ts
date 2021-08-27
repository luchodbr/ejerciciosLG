import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.component.html',
  styleUrls: ['./ejercicio01.component.css']
})
export class Ejercicio01Component implements OnInit {

  public edad1:any  ;
  public edad2 :any;
  public suma :any;
  public promedio:any;
  constructor(){}
  ngOnInit(){
    
  }
  Calcular(){
    this.suma=this.edad1 + this.edad2;
    this.promedio=(this.edad2+this.edad1)/2;
  }
  LimpiarCuadro(){
    this.edad1 =null;
    this.edad2 =null;
    this.suma =null;
    this.promedio =null;
  }
}