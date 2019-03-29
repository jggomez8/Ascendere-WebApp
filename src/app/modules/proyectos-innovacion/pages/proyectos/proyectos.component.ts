import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Proyecto, ProyectosInnovacion } from 'src/app/interfaces/proyecto';

@Component({
  selector: 'indev-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
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
  proyectos: ProyectosInnovacion;

  pageTitle: string;

  /**
   * Subscribe to new incoming projects from the Route data when query changes
   */
  private _projectsSub: Subscription;
  private _nameSub: Subscription;

  ngOnInit() {
    this._projectsSub = this._route.data.subscribe(
      data => {
        this.proyectos = data['proyectos'] as ProyectosInnovacion;
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
