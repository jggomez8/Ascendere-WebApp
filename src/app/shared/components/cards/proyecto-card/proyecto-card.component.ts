import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto';

// TODO: rename componet
@Component({
  selector: 'indev-proyecto-card',
  templateUrl: './proyecto-card.component.html',
  styleUrls: ['./proyecto-card.component.scss']
})
export class ProyectoCardComponent {
  @Input() proyecto: Proyecto;
}
