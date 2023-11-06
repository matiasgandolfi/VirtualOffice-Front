import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentaBancariaModel } from '../Models/CuentaBancariaModel';
import { TransferenciaBancariaModel } from '../Models/TransferenciaBancariaModel';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class CuentaBancariaService {
  private apiUrl = environment.apiUrl + "/CuentaBancaria"; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getCuentasBancarias(): Observable<CuentaBancariaModel[]> {
    return this.http.get<CuentaBancariaModel[]>(`${this.apiUrl}`);
  }

  getCuentaBancariaById(id: number): Observable<CuentaBancariaModel> {
    return this.http.get<CuentaBancariaModel>(`${this.apiUrl}/${id}`);
  }

  postCuentaBancaria(cuenta: CuentaBancariaModel): Observable<CuentaBancariaModel> {
    return this.http.post<CuentaBancariaModel>(`${this.apiUrl}`, cuenta);
  }

  updateCuentaBancaria(id: number, cuenta: CuentaBancariaModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, cuenta);
  }

  deleteCuentaBancaria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/CuentaBancaria/${id}`);
  }




  /*---------------------------------------------------*/


  getAllTransferencias(): Observable<TransferenciaBancariaModel[]> {
    return this.http.get<TransferenciaBancariaModel[]>(`${this.apiUrl}/transferencias`);
  }

  transferirSaldo(origenId: number, destinoId: number, monto: number): Observable<any> {
    const transferenciaData = {
      origenId: origenId,
      destinoId: destinoId,
      monto: monto
    };

    return this.http.post(`${this.apiUrl}/transferir`, transferenciaData);
  }







}
