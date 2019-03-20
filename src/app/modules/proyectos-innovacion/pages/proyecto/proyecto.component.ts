import { Component, OnInit, OnDestroy, Sanitizer } from '@angular/core';
import { ProyectoInnovacion } from 'src/app/interfaces/proyecto-innovacion';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'indev-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit, OnDestroy {
  // Map for diferent kind of project combinations
  _proyectTypes: Object = {
    'buena-practica': 'Buena Práctica',
    'proyecto-actual': 'Proyecto Actuale',
    'proyecto-coordinado': 'Proyectos Coordinados'
  };

  proyecto: ProyectoInnovacion;

  private _projectSub: Subscription;

  constructor(private _route: ActivatedRoute, private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this._projectSub = this._route.data.subscribe(
      data => {
        this.proyecto = data['proyecto'] as ProyectoInnovacion;
      },
      err => console.error('TODO: do something')
    );
  }

  ngOnDestroy() {
    this._projectSub.unsubscribe();
  }

  // getters
  get imgAlt() {
    return `Banner Proyecto: ${this.proyecto.name}`;
  }

  get projectType() {
    return this._proyectTypes[this.proyecto.type];
  }

  get validAreas() {
    return (
      this.proyecto.area.biologica ||
      this.proyecto.area.tecnica ||
      this.proyecto.area.administrativa ||
      this.proyecto.area.sociohumanistica
    );
  }

  get hasParticipants() {
    return this.proyecto.participants && this.proyecto.participants.length > 0;
  }

  get participantCareers() {
    const carreers = [];
    for (let i = 0; i < this.proyecto.participants.length; i++) {
      carreers.push(this.proyecto.participants[i].department);
    }
    return carreers.filter(function(item, pos) {
      return carreers.indexOf(item) == pos;
    });
  }
  get hasPeriods() {
    return this.proyecto.periods && this.proyecto.periods.length > 0;
  }
  get hasDocuments() {
    return this.proyecto.documents && this.proyecto.documents.length > 0;
  }

  get getPdf() {
    for (let i = 0; i < this.proyecto.documents.length; i++) {
      let doc = this.proyecto.documents[i];
      if (doc.url.includes('.pdf')) return this._sanitizer.bypassSecurityTrustResourceUrl(doc.url);
    }
    return null;
  }
}
