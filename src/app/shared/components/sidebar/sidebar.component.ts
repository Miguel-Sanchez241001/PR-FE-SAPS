import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {



  constructor(private router: Router) {}


  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Solicitudes',
        icon: 'pi pi-folder',
        items: [
          {
            label: 'Ver registro de solicitudes',
            icon: 'pi pi-eye',
            routerLink: '/ver-registro-solicitudes'
          },
          {
            label: 'Aprobar solicitudes',
            icon: 'pi pi-check',
            routerLink: '/aprobar-solicitudes'
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
            routerLink: '/ver-asignaciones'
          },
          {
            label: 'Realizar asignación',
            icon: 'pi pi-plus',
            routerLink: '/realizar-asignacion'
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
            routerLink: '/registrar-clientes'
          },
          {
            label: 'Ver clientes',
            icon: 'pi pi-eye',
            routerLink: '/ver-clientes'
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
            routerLink: '/registrar-personal'
          },
          {
            label: 'Modificar personal',
            icon: 'pi pi-pencil',
            routerLink: '/modificar-personal'
          }
        ]
      },   {
        label: 'Usuarios',
        icon: 'pi pi-id-card',
        items: [
          {
            label: 'Ver usuarios',
            icon: 'pi pi-eye',
            routerLink: '/ver-clientes'
          }
        ]
      }
    ];
}





}
