import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;

}
export const ROUTES: RouteInfo[] = [
    { path: '/inicio', title: 'Inicio',  icon: 'fa-solid fa-house' },
    { path: '/mi-organizacion-social', title: 'Mi organización social',  icon:'fa-solid fa-people-roof'},
    { path: '/generar-solicitud', title: 'Generar solicitud',  icon:'fa-solid fa-file-circle-plus'},
    { path: '/solicitudes-rechazadas', title: 'Solicitudes rechazadas',  icon:'fa-solid fa-file-circle-xmark'},
    { path: '/requisitos', title: 'Ver requisitos',  icon:'fa-solid fa-clipboard'},
    { path: '/organizaciones-sociales', title: 'Ver organizaciones sociales',  icon:'fa-solid fa-list-check' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
