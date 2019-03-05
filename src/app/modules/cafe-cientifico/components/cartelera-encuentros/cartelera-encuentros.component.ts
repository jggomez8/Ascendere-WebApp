import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'indev-cartelera-encuentros',
  templateUrl: './cartelera-encuentros.component.html',
  styleUrls: ['./cartelera-encuentros.component.scss']
})
export class CarteleraEncuentrosComponent {
  @ViewChild('verticalList') verticalList: ElementRef;

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
