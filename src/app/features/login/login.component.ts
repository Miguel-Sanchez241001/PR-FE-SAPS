import { Component } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  // constructor( private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['']), // Cambia '/dashboard' por la ruta de tu componente principal
      error: () => this.errorMessage = 'Invalid username or password'
    });
    // this.router.navigate(['/entidades']);
    // this.errorMessage = 'Invalid username or password';
  }
}
