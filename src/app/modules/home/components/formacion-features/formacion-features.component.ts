import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { InnovaTip } from 'src/app/interfaces/innova-tip';

@Component({
  selector: 'indev-formacion-features',
  templateUrl: './formacion-features.component.html',
  styleUrls: ['./formacion-features.component.scss']
})
export class FormacionFeaturesComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  encuentros: Encuentro[];
  cursos: Curso[];
  innovaTips: InnovaTip[];

  ngOnInit() {
    const data = this._route.snapshot.data;
    this.cursos = data['cursos'] as Curso[];
    this.encuentros = data['encuentros'] as Encuentro[];
    this.innovaTips = data['innovaTips'] as InnovaTip[];
  }
}
