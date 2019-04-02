import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { InnovaTip } from 'src/app/interfaces/innova-tip';
import { Noticia } from 'src/app/interfaces/noticia';

@Component({
  selector: 'indev-features-scroll',
  templateUrl: './features-scroll.component.html',
  styleUrls: ['./features-scroll.component.scss']
})
export class FeaturesScrollComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  encuentros: Encuentro[];
  cursos: Curso[];
  noticias: Noticia[];
  innovaTips: InnovaTip[];

  ngOnInit() {
    const data = this._route.snapshot.data;
    this.cursos = data['cursos'] as Curso[];
    this.encuentros = data['encuentros'] as Encuentro[];
    this.noticias = data['noticias'] as Noticia[];
    this.innovaTips = data['innovaTips'] as InnovaTip[];
  }
}
