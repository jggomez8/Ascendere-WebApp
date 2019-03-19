import { Component, Input } from '@angular/core';
import { ProyectoInnovacion } from 'src/app/interfaces/proyecto-innovacion';

// TODO: rename componet
@Component({
  selector: 'indev-proyectos-innovacion-card',
  templateUrl: './proyectos-innovacion-card.component.html',
  styleUrls: ['./proyectos-innovacion-card.component.scss']
})
export class ProyectosInnovacionCardComponent {
  @Input() proyecto: ProyectoInnovacion;

  get proyectoCoordinator() {
    return this.proyecto.coordinator.toLowerCase();
  }

  get imgAlt() {
    return `Banner Proyecto: ${this.proyecto.name}`
  }
}
