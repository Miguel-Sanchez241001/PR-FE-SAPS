import { Component, OnInit, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggingService } from '../../core/services/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  errorMessage = signal<string | null>(null);

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
        this.errorMessage.set(state);
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
        this.errorMessage.set(err.message);
        this.loggingService.log('LoginComponent', `Login failed: ${err.message}`, 'error');
      }
    });
  }
}
