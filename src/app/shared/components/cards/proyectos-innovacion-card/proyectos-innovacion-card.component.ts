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
  heroImage = 'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg';
}
