import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { LoginModel } from 'src/app/Models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData : LoginModel= {
    email: "hola@gmail.com",
    contrasena: "54321"
  }

  constructor(private loginService: LoginService) {}

  onLogin() {
     this.loginService.login(this.loginData).subscribe(
       (response) => {
         console.log('Inicio de sesión exitoso', response);
       },
       (error) => {
         console.error('Error de inicio de sesión', error);
       }
     );
  }
}
