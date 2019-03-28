import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cursos } from 'src/app/interfaces/curso';

@Component({
  selector: 'indev-portfolio',
  template: `
    <indev-header>
      <h1 class="TextTheme--display2">Portafolio de Cursos</h1>
    </indev-header>

    <section indev-section class="container">
      <!-- TODO: add search bar -->
      <div *ngIf="cursos.hasCursos; else emptyMessage">
        <div class="grid">
          <indev-curso-card *ngFor="let curso of cursos.cursos" [curso]="curso"></indev-curso-card>
        </div>

        <!-- TODO: add pagination -->
      </div>
      <ng-template #emptyMessage>
        <span class="TextTheme--headline">
          ❗ No se encontraron cursos.
        </span>
      </ng-template>
    </section>
  `
})
// TODO: rename component to PortafolioCursos
export class PortfolioCursosComponent implements OnInit {
  cursos: Cursos;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.cursos = this._route.snapshot.data['cursos'] as Cursos;
  }
}
