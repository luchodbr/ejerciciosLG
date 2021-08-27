import { Component,NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primera-clase';
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