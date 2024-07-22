import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UnauthorizedComponent } from '../features/unauthorized/unauthorized.component';
import {Button} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {PanelMenuModule} from "primeng/panelmenu";
import {Ripple} from "primeng/ripple";
import {BadgeModule} from "primeng/badge";
import {TieredMenuModule} from "primeng/tieredmenu";


@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
   ],
  exports: [
    TopbarComponent,
    SidebarComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        Button,
        ToolbarModule,
        PanelMenuModule,
        Ripple,
        BadgeModule,
        TieredMenuModule
    ]
})
export class SharedModule { }
