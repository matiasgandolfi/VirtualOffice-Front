import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Deja solo FormsModule
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { CuentasBancariasComponent } from './Components/cuentas-bancarias/cuentas-bancarias.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { TransferenciaBancariaComponent } from './Components/transferencia-bancaria/transferencia-bancaria.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientesComponent,
    CuentasBancariasComponent,
    UsuariosComponent,
    TransferenciaBancariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
