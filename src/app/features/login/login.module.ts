import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {MatSidenavModule} from '@angular/material/sidenav';
import {PasswordModule} from "primeng/password";
import {CheckboxModule} from "primeng/checkbox";
import {Button, ButtonDirective} from "primeng/button";
import {MessagesModule} from "primeng/messages";
import {Ripple} from "primeng/ripple";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterModule.forChild([{path: '', component: LoginComponent}]),
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    PasswordModule,
    CheckboxModule,
    Button,
    MessagesModule,
    Ripple,
    ButtonDirective
  ]
})
export class LoginModule { }
