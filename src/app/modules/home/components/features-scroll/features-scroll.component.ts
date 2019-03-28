import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cursos } from 'src/app/interfaces/curso';
import { Encuentros } from 'src/app/interfaces/encuentro';

@Component({
  selector: 'indev-features-scroll',
  templateUrl: './features-scroll.component.html',
  styleUrls: ['./features-scroll.component.scss']
})
export class FeaturesScrollComponent implements OnInit {
  encuentros: Encuentros;
  cursos: Cursos;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    const data = this._route.snapshot.data;
    console.log(data);
    this.cursos = data['cursos'] as Cursos;
    this.encuentros = data['encuentros'] as Encuentros;
  }
}
