import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log("Inicio componente login");

    // Capturar el estado de navegación
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { errorMessage?: string, message?: string };
    if (state) {
      this.errorMessage = state.errorMessage || state.message || '';
    }

    // Verificar autenticación y redirigir
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }

    // Suscribirse a los eventos de navegación para capturar el estado de navegación en tiempo real
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      const state = navigation?.extras.state as { errorMessage?: string, message?: string };
      if (state) {
        this.errorMessage = state.errorMessage || state.message || '';
      }
    });
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => this.errorMessage = err.message
    });
  }
}
