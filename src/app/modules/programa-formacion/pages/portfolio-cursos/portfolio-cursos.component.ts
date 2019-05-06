import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'indev-portfolio',
  template: `
    <indev-admin-actions>
      <a [routerLink]="['/programa-formacion/admin/create']" mat-menu-item>Crear Curso</a>
    </indev-admin-actions>

    <indev-header>
      <h1>Portafolio de Cursos</h1>
    </indev-header>

    <section indev-section class="container">
      <!-- TODO: add search bar -->
      <div *ngIf="cursos.length > 0; else emptyMessage">
        <div class="grid">
          <indev-curso-card *ngFor="let curso of cursos" [curso]="curso"></indev-curso-card>
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
  cursos: Curso[];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.cursos = this._route.snapshot.data['cursos'] as Curso[];
  }
}
