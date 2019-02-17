import { Component } from '@angular/core';

@Component({
  selector: 'indev-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss']
})
export class CursoCardComponent {
  title = 'Nombre Encuentro Prueba Esto es muy Largo';
  type = 'investigacion';
  starDate = new Date();
  endDate = new Date();
}
