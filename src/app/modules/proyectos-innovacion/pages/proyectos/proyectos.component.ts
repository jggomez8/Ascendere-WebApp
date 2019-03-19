import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoInnovacion } from 'src/app/interfaces/proyecto-innovacion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit, OnDestroy {
  proyectos: ProyectoInnovacion[];

  private _sub: Subscription;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._sub = this._route.data.subscribe(
      data => {
        this.proyectos = data['proyectos'] as ProyectoInnovacion[];
      },
      err => console.error('TODO: do something')
    );
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
