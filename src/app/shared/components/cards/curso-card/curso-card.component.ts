import { Component } from '@angular/core';

@Component({
  selector: 'indev-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss']
})
export class CursoCardComponent {
  title = 'Nombre Encuentro Prueba Esto es muy Largo';
  type = 'investigacion'; // TODO: get type as background
  starDate = new Date();
  endDate = new Date();

  get background(): object {
    if (this.type === 'investigacion')
      return { 'background-image': 'linear-gradient(to bottom right,#ffb31b,#ffaa00)' };
    return { 'background-image': 'linear-gradient(to bottom right,#ffb31b,#ffaa00)' };
  }
}
