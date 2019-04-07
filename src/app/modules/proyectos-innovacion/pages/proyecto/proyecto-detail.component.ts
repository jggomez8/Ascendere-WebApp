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
  constructor(private _route: ActivatedRoute) {}

  proyecto: Proyecto;

  private _projectSub: Subscription;

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
}
