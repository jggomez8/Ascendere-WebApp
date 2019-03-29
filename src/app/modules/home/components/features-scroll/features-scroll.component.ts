import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cursos } from 'src/app/interfaces/curso';
import { Encuentros } from 'src/app/interfaces/encuentro';
import { Noticias } from 'src/app/interfaces/noticia';
import { InnovaTips } from 'src/app/interfaces/innova-tip';

@Component({
  selector: 'indev-features-scroll',
  templateUrl: './features-scroll.component.html',
  styleUrls: ['./features-scroll.component.scss']
})
export class FeaturesScrollComponent implements OnInit {
  encuentros: Encuentros;
  cursos: Cursos;
  noticias: Noticias;
  innovaTips: InnovaTips;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    const data = this._route.snapshot.data;
    this.cursos = data['cursos'] as Cursos;
    this.encuentros = data['encuentros'] as Encuentros;
    this.noticias = data['noticias'] as Noticias;
    this.innovaTips = data['innovaTips'] as InnovaTips;
  }
}
