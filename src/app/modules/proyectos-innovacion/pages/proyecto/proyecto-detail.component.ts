import { Component, OnInit, OnDestroy, Sanitizer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Proyecto } from 'src/app/interfaces/proyecto';

@Component({
  selector: 'indev-proyecto-detail',
  templateUrl: './proyecto-detail.component.html',
  styleUrls: ['./proyecto-detail.component.scss']
})
export class ProyectoDetailComponent implements OnInit, OnDestroy {
  // Map for diferent kind of project combinations
  _proyectTypes: Object = {
    'buena-practica': 'Buena Práctica',
    'proyecto-actual': 'Proyecto Actual',
    'proyecto-coordinado': 'Proyectos Coordinados'
  };

  proyecto: Proyecto;

  private _projectSub: Subscription;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._projectSub = this._route.data.subscribe(
      data => {
        this.proyecto = data['proyecto'] as Proyecto;
      },
      err => console.error('TODO: do something')
    );
  }

  ngOnDestroy() {
    this._projectSub.unsubscribe();
  }

  get projectType() {
    return this._proyectTypes[this.proyecto.type];
  }
}
