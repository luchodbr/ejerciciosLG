import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Clases/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  email:string="";
  public  password:string="";
  public user :Usuario=new Usuario();
  constructor() { }

  ngOnInit(): void {
    this.user.displayName="display";
    this.user.email="emaildeprueba";
    this.user.emailVerified=true;
    this.user.uid="uid";
  }

    falsoLogin(){
            
      if(this.email=="asd" && this.password =="123"){
      this.user.email=this.email;
      this.user.emailVerified=true;
        console.log(this.user);}
        else
        console.log("press F to pray respect")
    }
}
