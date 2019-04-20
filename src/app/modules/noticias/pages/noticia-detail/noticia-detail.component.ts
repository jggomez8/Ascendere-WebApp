import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'indev-noticia-detail',
  template: `
    <indev-admin-actions>
      <a [routerLink]="['/noticias/edit', noticia.id]" mat-flat-button color="primary">
        Editar Noticia
      </a>
    </indev-admin-actions>

    <indev-header>
      <h2>Fecha: {{ noticia.date | date: 'fullDate' }}</h2>
      <h1 class="TextTheme--display2">{{ noticia.name }}</h1>
    </indev-header>

    <section indev-section class="container">
      <markdown [data]="noticia.html"></markdown>
    </section>

    <section indev-section class="container" *ngIf="noticias.length > 0">
      <indev-section-title>Otras Noticias</indev-section-title>
      <indev-section-controls>
        <a [routerLink]="['/noticias']" mat-button color="primary">
          Ver más
        </a>
      </indev-section-controls>
      <div class="grid">
        <indev-noticia-card *ngFor="let noticia of noticias" [noticia]="noticia">
        </indev-noticia-card>
      </div>
    </section>
  `
})
export class NoticiaDetailComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  noticia: Noticia;
  user: boolean;
  noticias: Noticia[];

  ngOnInit() {
    this._route.data.subscribe(data => {
      this.noticia = data['noticia'] as Noticia;
      this.noticias = data['noticias'] as Noticia[];
    });
  }
}
