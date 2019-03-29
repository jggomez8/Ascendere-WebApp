import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosInnovacion } from 'src/app/interfaces/proyecto';

@Component({
  selector: 'indev-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  proyectosInnovacion: ProyectosInnovacion;

  ngOnInit() {
    this.proyectosInnovacion = this._route.snapshot.data[
      'proyectosInnovacion'
    ] as ProyectosInnovacion;
  }
}
