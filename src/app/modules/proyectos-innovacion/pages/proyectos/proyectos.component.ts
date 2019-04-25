import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/interfaces/proyecto';

@Component({
  selector: 'indev-proyectos',
  template: `
    <indev-admin-actions>
      <a [routerLink]="['/proyectos-innovacion/admin/create']" mat-menu-item>Crear Proyecto</a>
    </indev-admin-actions>

    <indev-header *ngIf="pageTitle">
      <h1 class="TextTheme--display2">{{ pageTitle }}</h1>
    </indev-header>
    <section indev-section class="container">
      <div class="grid" style="--size: 400px" *ngIf="proyectos.length > 0; else emptyMessage">
        <indev-proyecto-card
          *ngFor="let proyecto of proyectos"
          [proyecto]="proyecto"
        ></indev-proyecto-card>
      </div>
      <ng-template #emptyMessage>
        <span class="TextTheme--display1">
          ❗ Lo sentimos, pero no se encontraron proyectos.
        </span>
      </ng-template>
    </section>
  `
})
export class ProyectosComponent implements OnInit, OnDestroy {
  constructor(private _route: ActivatedRoute) {}

  /**
   * Map of project types with areas in the query and value. In this case
   * value is used to get the title for this page
   */
  _proyectTypes: Object = {
    'buena-practica': 'Buenas Prácticas',
    'proyecto-actual': 'Proyectos Actuales',
    'proyecto-coordinado': 'Proyectos Coordinados'
  };

  /**
   * Store all projects fo be displayed in the page
   */
  proyectos: Proyecto[];

  pageTitle: string;

  /**
   * Subscribe to new incoming projects from the Route data when query changes
   */
  private _projectsSub: Subscription;
  private _nameSub: Subscription;

  ngOnInit() {
    this._projectsSub = this._route.data.subscribe(
      data => {
        this.proyectos = data['proyectos'] as Proyecto[];
      },
      err => console.error('TODO: do something')
    );

    this._nameSub = this._route.queryParams.subscribe(queryParams => {
      this.pageTitle = this._proyectTypes[queryParams['type']];
    });
  }

  ngOnDestroy() {
    this._projectsSub.unsubscribe();
    this._nameSub.unsubscribe();
  }
}
