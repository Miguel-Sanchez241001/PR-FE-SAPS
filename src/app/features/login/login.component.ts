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

  constructor(private authService: AuthService, private router: Router) {

    // Capturar el estado de navegación
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { errorMessage?: string, message?: string };
    if (state) {
      this.errorMessage = state.errorMessage || state.message || '';
    }
  }

  ngOnInit(): void {
    console.log("Inicio componente login");
    // Verificar autenticación y redirigir
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }

  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => this.errorMessage = err.message
    });
  }
}
