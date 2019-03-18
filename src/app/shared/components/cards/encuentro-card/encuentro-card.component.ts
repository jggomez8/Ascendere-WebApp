import { Component, Input } from '@angular/core';

// types
import { Encuentro } from 'src/app/interfaces/encuentro';

@Component({
  selector: 'indev-encuentro-card',
  templateUrl: './encuentro-card.component.html',
  styleUrls: ['./encuentro-card.component.scss']
})
export class EncuentroCardComponent {
  @Input() encuentro: Encuentro;

  get encuentroDate(): number {
    return this.encuentro.date.seconds * 1000;
  }
}
