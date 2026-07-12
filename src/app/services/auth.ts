import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private readonly apiUrl = environment.server_url;

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      credentials,
      { responseType: 'json' }
    ).pipe(
      tap(({ token }) => {
        localStorage.setItem('token', token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    // comparar token con el almacenado en localStorage para verificar si es válido
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return token;
  }



  isAuthenticated(): boolean {
    return !!this.getToken();
  }

}