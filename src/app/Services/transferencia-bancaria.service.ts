import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { TransferenciaBancariaModel } from '../Models/TransferenciaBancariaModel';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaBancariaService {
  private apiUrl = environment.apiUrl + '/CuentaBancaria'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  // getAllTransferencia(): Observable<TransferenciaBancariaModel[]> {
  //   return this.http.get<TransferenciaBancariaModel[]>(`${this.apiUrl}/transferencia`);
  // }

  getAllTransferencia(): Observable<TransferenciaBancariaModel[]> {
    return this.http.get<TransferenciaBancariaModel[]>(`${this.apiUrl}/transferencia`)
        .pipe(
            catchError(error => {
                console.error('Error en la solicitud HTTP:', error);
                throw error;
            })
        );
}



  //REALIZAR TRANSFERENCIA

  transferirSaldo(origenId: number, destinoId: number, monto: number): Observable<string> {
    const data = {
      origenId: origenId,
      destinoId: destinoId,
      monto: monto
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<string>(`${this.apiUrl}/transferir`, data, httpOptions);
  }
}
