import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environment/environment';
import { LoginModel } from '../Models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiUrl;
  private isAuthenticatedFlag = false;
  private token: string = '';

  constructor(private http: HttpClient) {}

  login(loginData: LoginModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/Login/authenticate`, loginData)
      .pipe(
        tap((response: any) => {
          if (response && 'token' in response) {
            this.token = response.token;
            this.isAuthenticatedFlag = true;
          }
        })
      );
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/Login/is-authenticated`);
  }

  getBearerToken(): string {
    return this.token;
  }

  clearAuthentication() {
    this.token = '';
    this.isAuthenticatedFlag = false;
  }
}
