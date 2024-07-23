import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggingService } from '../../core/services/logging.service';
import { Message } from 'primeng/api'; // Importar la interfaz Message de PrimeNG

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
      transform: scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  public rememberMe: boolean = false;
  public errorMessage: Message[] = []; // Definir como un array de mensajes

  constructor(
    private authService: AuthService,
    private routeA: ActivatedRoute,
    private router: Router,
    private loggingService: LoggingService
  ) {
    this.loggingService.log('LoginComponent', 'Login component created', 'debug');

    // Capturar el estado de navegación
    this.routeA.queryParams.subscribe(params => {
      const state = params['message'] ?? params['errorMessage'] ?? null;
      if (state) {
        this.errorMessage = [{ severity: 'success', summary: 'Success', detail: state }];
        this.loggingService.log('LoginComponent', `Query parameter state set to: ${state}`, 'debug');
      }
    });
  }

  ngOnInit(): void {
    this.loggingService.log('LoginComponent', 'ngOnInit called', 'debug');

    // Verificar autenticación y redirigir
    if (this.authService.isAuthenticated()) {
      this.loggingService.log('LoginComponent', 'User is authenticated, navigating to /dashboard', 'debug');
      this.router.navigate(['/dashboard']);
    } else {
      this.loggingService.log('LoginComponent', 'User is not authenticated', 'debug');
    }
  }

  login(): void {
    this.loggingService.log('LoginComponent', `Attempting login with username: ${this.username}`, 'debug');
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.loggingService.log('LoginComponent', 'Login successful, navigating to /dashboard', 'debug');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.errorMessage = [{ severity: 'error', summary: 'Error', detail: err.message }];
        this.loggingService.log('LoginComponent', `Login failed: ${err.message}`, 'error');
      }
    });
  }



}
