import { Component, OnInit } from '@angular/core';
import { CuentaBancariaService } from '../../Services/cuenta-bancaria.service'; // Asegúrate de importar el servicio correctamente
import { CuentaBancariaModel } from '../../Models/CuentaBancariaModel';

@Component({
  selector: 'app-cuentas-bancarias',
  templateUrl: './cuentas-bancarias.component.html',
  styleUrls: ['./cuentas-bancarias.component.css']
})
export class CuentasBancariasComponent implements OnInit {
  cuentasBancarias: CuentaBancariaModel[] = [];

  constructor(private cuentaBancariaService: CuentaBancariaService) { }

  ngOnInit(): void {
    this.loadCuentasBancarias();
  }

  loadCuentasBancarias() {
    this.cuentaBancariaService.getCuentasBancarias().subscribe((data: CuentaBancariaModel[]) => {
      this.cuentasBancarias = data;
    });
  }




}
