import {Component, OnInit} from '@angular/core';
import {AuthService} from "./core/services/auth.service";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
     .box-main{
       height: 85vh;
     }

  `]
 })
export class AppComponent  implements OnInit {
  title = 'frontendSGAP';

  constructor(private authService: AuthService,private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}
