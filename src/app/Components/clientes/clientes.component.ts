import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../Services/cliente.service'; // Asegúrate de importar el servicio correctamente
import { ClienteModel } from '../../Models/ClienteModel';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: ClienteModel[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes() {
    this.clienteService.getClientes().subscribe((data: ClienteModel[]) => {
      this.clientes = data;
    });
  }
}
