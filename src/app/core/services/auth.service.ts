import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { AuthResponse, User } from "./auth-interfaces";
import { Router } from "@angular/router";
import { LoggingService } from '../services/logging.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://your-api-url.com/auth';

  constructor(
    private http: HttpClient,
    private router: Router,
    private loggingService: LoggingService
  ) {}

  login(username: string, password: string): Observable<AuthResponse> {
    if (username === 'admin' && password === 'admin') {
      const response: AuthResponse = {
        token: 'dummy-token',
        user: {
          nombreCompleto: 'Sofia Fernanda Torres',
          role: 'administrador',
          permissions: ['usuarios']
        }
      };
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      this.loggingService.log('AuthService', `User ${response.user.nombreCompleto} logged in successfully`, 'debug');
      return of(response);
    } else if (username === 'user' && password === 'user') {
      const response: AuthResponse = {
        token: 'dummy-token-user',
        user: {
          nombreCompleto: 'Jose Florez Rivera',
          role: 'asignador',
          permissions: ['asignar', 'personal',]
        }
      };
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      this.loggingService.log('AuthService', `User ${response.user.nombreCompleto} logged in successfully`, 'debug');
      return of(response);
    }  else if (username === 'operador' && password === 'operador') {
      const response: AuthResponse = {
        token: 'dummy-token-user',
        user: {
          nombreCompleto: 'Sebastian Diaz Florez ',
          role: 'operador',
          permissions: ['clientes', 'solicitudes']
        }
      };
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      this.loggingService.log('AuthService', `User ${response.user.nombreCompleto} logged in successfully`, 'debug');
      return of(response);
    } else {
      this.loggingService.log('AuthService', 'Invalid username or password', 'error');
      return throwError(() => new Error('Nombre o clave invalida'));
    }
  }

  logout(): void {
    const user = this.getAuthenticatedUser();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/'], {
      queryParams: { errorMessage: 'Session Cerrada con exito' }
    });
    this.loggingService.log('AuthService', `User ${user?.nombreCompleto} logged out`, 'debug');
  }

  isAuthenticated(): boolean {
    const isAuthenticated = !!localStorage.getItem('token');
   // this.loggingService.log('AuthService', `isAuthenticated: ${isAuthenticated}`, 'debug');
    return isAuthenticated;
  }

  getAuthenticatedUser(): User | null {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    this.loggingService.log('AuthService', `getAuthenticatedUser: ${user?.nombreCompleto}`, 'debug');
    return user;
  }
}
