import { Component } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../../core/services/auth-interfaces";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.user = this.authService.getAuthenticatedUser();
    if (this.user) {
      console.log(`Usuario autenticado: ${this.user.nombreCompleto}`);
      console.log(`Permisos: ${this.user.permissions.join(', ')}`);
    }
  }

  loguotApp(): void {
    this.authService.logout();
  }
}
