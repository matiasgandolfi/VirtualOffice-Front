import { Component, OnInit } from '@angular/core';
import { TransferenciaBancariaService } from '../../Services/transferencia-bancaria.service';
import { TransferenciaBancariaModel } from '../../Models/TransferenciaBancariaModel';

@Component({
  selector: 'app-transferencia-bancaria',
  templateUrl: './transferencia-bancaria.component.html',
  styleUrls: ['./transferencia-bancaria.component.css']
})
export class TransferenciaBancariaComponent implements OnInit {
   transferencias: TransferenciaBancariaModel[] = [];

  constructor(private transferenciaService: TransferenciaBancariaService) {}

  ngOnInit() {
    this.loadTransferencias();
  }

  loadTransferencias() {
      this.transferenciaService.getAllTransferencia().subscribe((data: TransferenciaBancariaModel[]) => {
        this.transferencias = data;
      });
  }
}
