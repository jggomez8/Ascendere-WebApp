import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'indev-quienes-somos',
  template: `
    <!-- Other components for navigation -->
    <indev-return-fab></indev-return-fab>
    <indev-go-top-fab></indev-go-top-fab>

    <!-- Main page -->
    <main>
      <div class="hero-banner aspect-ratio" style="--aspect-ratio: 21/9">
        <img src="/assets/images/ascendere/banner-quienes-somos.jpg" alt="Banner Quienes Somos" />
      </div>

      <section class="container" indev-section>
        <markdown src="/assets/markdown/ascendere/quienes-somos.md"></markdown>
      </section>
      <section class="container" indev-section>
        <div class="grid">
          <indev-personal-card
            [persona]="persona"
            *ngFor="let persona of personal"
          ></indev-personal-card>
        </div>
      </section>
      <section class="container" indev-section>
        <markdown src="/assets/markdown/ascendere/indev.md"></markdown>
      </section>
      <section class="container" indev-section>
        <indev-section-controls>
          <button mat-raised-button color="primary" (click)="goBack()">Regresar</button>
        </indev-section-controls>
      </section>
    </main>
  `,
  styles: [
    `
      indev-go-top-fab {
        color: wheat !important;
        fill: white !important;
      }
      .hero-banner img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: 50% 20%;
      }
    `
  ]
})
export class QuienesSomosComponent {
  constructor(private _location: Location) {}

  personal = [
    {
      name: 'PhD. María Isabel Loaiza',
      content: 'Dirección de Innovación, Formación y Evaluación Docente',
      image: '/assets/images/ascendere/maria-isabel.jpg'
    },
    {
      name: 'Ing. Nuve Briceño',
      content: 'Formación Docente',
      image: '/assets/images/ascendere/nuve-briceño.jpg'
    },
    {
      name: 'Mgtr. Angela Salazar',
      content: 'Innovación Docente',
      image: '/assets/images/ascendere/angela-salazar.jpg'
    },
    {
      name: 'Mgtr. Lourdes Cueva',
      content: 'Evaluación Docente',
      image: '/assets/images/ascendere/lourdes-cueva.jpg'
    }
  ];

  goBack() {
    this._location.back();
  }
}
