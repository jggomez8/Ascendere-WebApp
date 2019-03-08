import { Component } from '@angular/core';

@Component({
  selector: 'indev-proyectos-innovacion-card',
  templateUrl: './proyectos-innovacion-card.component.html',
  styleUrls: ['./proyectos-innovacion-card.component.scss']
})
export class ProyectosInnovacionCardComponent {
  title = 'Nombre Encuentro Prueba Esto es muy Largo';
  coordinador = 'Nombre Coordinador';
  pariticpantes = 4;
  area = {
    biologica: true,
    tecnica: true
  };
  heroImage =
    'https://images.unsplash.com/photo-1551855042-d8251a1244b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80';
}
