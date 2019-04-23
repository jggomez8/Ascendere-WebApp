import { Component } from '@angular/core';

@Component({
  selector: 'indev-convocatoria',
  template: `
    <section indev-section class="container">
      <indev-section-title>
        Convocatorias de Proyectos
      </indev-section-title>
      <indev-section-controls>
        <button mat-button color="primary">Convocatorias Anteriores</button>
      </indev-section-controls>
      <markdown src="/assets/markdown/proyectos-innovacion/convocatoria.md"></markdown>
    </section>
  `
})
export class ConvocatoriaComponent {}
