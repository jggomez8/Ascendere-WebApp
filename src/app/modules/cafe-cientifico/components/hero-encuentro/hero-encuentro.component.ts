import { Component, Input } from '@angular/core';

// types
import { Encuentro } from 'src/app/interfaces/encuentro';

@Component({
  selector: 'indev-hero-encuentro',
  templateUrl: './hero-encuentro.component.html',
  styleUrls: ['./hero-encuentro.component.scss']
})
export class HeroEncuentroComponent {
  @Input() encuentro: Encuentro;
}
