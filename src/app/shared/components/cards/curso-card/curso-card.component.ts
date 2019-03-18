import { Component, Input } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'indev-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss']
})
export class CursoCardComponent {
  @Input() curso: Curso;

  get singleDate(): boolean {
    return this.curso.endDate === null && this.curso.date !== null;
  }

  get startDate(): number {
    return this.curso.date.seconds * 1000;
  }
  get endDate(): number {
    return this.curso.endDate.seconds * 1000;
  }

  get background(): object {
    if (this.curso.img === 'investigacion')
      return { 'background-image': 'linear-gradient(to bottom right,#ffb31b,#ffaa00)' };
    return { 'background-image': 'linear-gradient(to bottom right,#ffb31b,#ffaa00)' };
  }
}
