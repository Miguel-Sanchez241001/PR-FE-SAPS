import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {AuthResponse, User} from "./auth-interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * TODO : endpoint para la autenticacion
   */
  private apiUrl = 'https://your-api-url.com/auth';

  constructor(private http: HttpClient) {}


  // TODO funcion login pendiente revisar
  login(username: string, password: string): Observable<AuthResponse> {
    /*  return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
        .pipe(map(response => {
          // Guarda el token en localStorage
          localStorage.setItem('token', response.token);
          return response;
        }));
     */
    if (username === 'admin' && password === 'admin') {
      const response: AuthResponse = {
        token: 'dummy-token',
        user: {
          nombreCompleto: 'Sofia Fernanda Torres',
          role: 'administrador',
          permissions: ['all']
        }
      };
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      return of(response);
    } else if (username === 'user' && password === 'user') {
      const response: AuthResponse = {
        token: 'dummy-token-user',
        user: {
          nombreCompleto: 'Jose Florez Rivera',
          role: 'asignador',
          permissions: ['asignar', 'personal', 'horario']
        }
      };
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      return of(response);
    } else {
      return throwError(() => new Error('Nombre o clave invalida'));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
    //return true;

  }

  getAuthenticatedUser(): User | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }
}
