// usuario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../Models/UsuarioDTO';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = environment.apiUrl + "/Usuario"; // Ajusta la URL de acuerdo a tu API

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<UsuarioDTO[]> {
    return this.http.get<UsuarioDTO[]>(`${this.baseUrl}`);
  }

  getUsuarioById(id: number): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(`${this.baseUrl}/${id}`);
  }

  postUsuario(usuario: UsuarioDTO): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(`${this.baseUrl}`, usuario);
  }

  putUsuario(id: number, usuario: UsuarioDTO): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
