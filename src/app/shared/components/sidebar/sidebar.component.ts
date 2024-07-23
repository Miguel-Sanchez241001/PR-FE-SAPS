import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {



  constructor(private authService: AuthService,private router: Router) {}


  items: MenuItem[] = [];

  ngOnInit() {
    this.buildMenu();
}

  buildMenu() {
    const user = this.authService.getAuthenticatedUser();
    if (user) {
      const permissions = user.permissions;
      this.items = [
        {
          label: 'Solicitudes',
          icon: 'pi pi-folder',
          items: [
            {
              label: 'Ver registro de solicitudes',
              icon: 'pi pi-eye',
              routerLink: '/ver-registro-solicitudes',
              visible: permissions.includes('solicitudes')
            },
            {
              label: 'Aprobar solicitudes',
              icon: 'pi pi-check',
              routerLink: '/aprobar-solicitudes',
              visible: permissions.includes('solicitudes')
            }
          ]
        },
        {
          label: 'Asignaciones',
          icon: 'pi pi-list',
          items: [
            {
              label: 'Ver asignaciones',
              icon: 'pi pi-eye',
              routerLink: '/ver-asignaciones',
              visible: permissions.includes('asignar')
            },
            {
              label: 'Realizar asignación',
              icon: 'pi pi-plus',
              routerLink: '/realizar-asignacion',
              visible: permissions.includes('asignar')
            }
          ]
        },
        {
          label: 'Clientes',
          icon: 'pi pi-users',
          items: [
            {
              label: 'Registrar clientes',
              icon: 'pi pi-user-plus',
              routerLink: '/registrar-clientes',
              visible: permissions.includes('clientes')
            },
            {
              label: 'Ver clientes',
              icon: 'pi pi-eye',
              routerLink: '/ver-clientes',
              visible: permissions.includes('clientes')
            }
          ]
        },
        {
          label: 'Personal',
          icon: 'pi pi-id-card',
          items: [
            {
              label: 'Registrar personal',
              icon: 'pi pi-user-plus',
              routerLink: '/registrar-personal',
              visible: permissions.includes('personal')
            },
            {
              label: 'Modificar personal',
              icon: 'pi pi-pencil',
              routerLink: '/modificar-personal',
              visible: permissions.includes('personal')
            }
          ]
        },
        {
          label: 'Usuarios',
          icon: 'pi pi-id-card',
          items: [
            {
              label: 'Ver usuarios',
              icon: 'pi pi-eye',
              routerLink: '/ver-clientes',
              visible: permissions.includes('usuarios')
            }
          ]
        }
      ];

      // Filtrar elementos invisibles
      this.items = this.items.map(item => {
        return {
          ...item,
          items: item.items!.filter(subItem => subItem.visible)
        };
      }).filter(item => item.items.length > 0);
    }
  }



}
