import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto';

@Component({
  selector: 'indev-proyecto-detail',
  templateUrl: './proyecto-detail.component.html',
  styleUrls: ['./proyecto-detail.component.scss']
})
export class ProyectoDetailComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  proyecto: Proyecto;

  ngOnInit() {
    this.proyecto = this._route.snapshot.data['proyecto'];
  }
}
