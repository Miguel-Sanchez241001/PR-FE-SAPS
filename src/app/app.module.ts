import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from "./features/login/login.module";
import {HttpClientModule} from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import {MatIconModule} from "@angular/material/icon";
import {AuthService} from "./core/services/auth.service";
import {UnauthorizedComponent} from "./features/unauthorized/unauthorized.component";
import {ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    SharedModule,
    DashboardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    ButtonDirective,
    Ripple
  ],
  providers: [
    provideAnimationsAsync(),
    AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
