import { Component, ViewChild, ElementRef, Input } from '@angular/core';

// types
import { Encuentro } from 'src/app/interfaces/encuentro';

@Component({
  selector: 'indev-cartelera-encuentros',
  templateUrl: './cartelera-encuentros.component.html',
  styleUrls: ['./cartelera-encuentros.component.scss']
})
export class CarteleraEncuentrosComponent {
  @Input() encuentros: Encuentro[];

  @ViewChild('verticalList') verticalList: ElementRef;

  // TODO: add scroll depending on card size
  scrollLeft() {
    (this.verticalList.nativeElement as HTMLElement).scrollBy({
      behavior: 'smooth',
      left: -350
    });
  }
  scrollRight() {
    (this.verticalList.nativeElement as HTMLElement).scrollBy({
      behavior: 'smooth',
      left: 350
    });
  }
}
