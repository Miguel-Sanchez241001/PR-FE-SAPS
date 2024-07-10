import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";

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
  login(username: string, password: string): Observable<any> {
    /*  return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
        .pipe(map(response => {
          // Guarda el token en localStorage
          localStorage.setItem('token', response.token);
          return response;
        }));
     */
    if (username === 'admin' && password === 'admin') {
      const response = { token: 'dummy-token' };
      // Guarda el token en localStorage
      localStorage.setItem('token', response.token);
      return of(response);
    } else {
      return throwError(() => new Error('Invalid username or password'));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
    //return true;

  }
}
