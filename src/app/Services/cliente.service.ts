import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteModel } from '../Models/ClienteModel'; // Asegúrate de importar el modelo adecuado
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = environment.apiUrl + "/Cliente"; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getClientes(): Observable<ClienteModel[]> {
    return this.http.get<ClienteModel[]>(`${this.apiUrl}`);
  }

  getClienteById(id: number): Observable<ClienteModel> {
    return this.http.get<ClienteModel>(`${this.apiUrl}/${id}`);
  }

  postCliente(cliente: ClienteModel): Observable<ClienteModel> {
    return this.http.post<ClienteModel>(`${this.apiUrl}/Cliente`, cliente);
  }

  updateCliente(id: number, cliente: ClienteModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/Cliente/${id}`, cliente);
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Cliente/${id}`);
  }
}
