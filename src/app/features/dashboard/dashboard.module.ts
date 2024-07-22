import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ButtonModule } from 'primeng/button';
import {ButtonGroupModule} from "primeng/buttongroup";

@NgModule({
  declarations: [
    DashboardComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule,
    ButtonGroupModule
  ]
})
export class DashboardModule { }
