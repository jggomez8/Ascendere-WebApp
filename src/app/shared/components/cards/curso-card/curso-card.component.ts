import { Component, Input } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'indev-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss']
})
export class CursoCardComponent {
  @Input() curso: Curso;
}
