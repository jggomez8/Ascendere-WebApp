import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';
import { ActivatedRoute } from '@angular/router';
import { UserRoleService } from 'src/app/shared/providers/services/user-role.service';

@Component({
  selector: 'indev-noticia-detail',
  template: `
    <indev-header>
      <h2>Fecha: {{ noticia.date | date: 'fullDate' }}</h2>
      <h1 class="TextTheme--display2">{{ noticia.name }}</h1>
    </indev-header>

    <section indev-section class="container" *ngIf="user">
      <indev-section-title>Funciones de Administrador</indev-section-title>
      <indev-section-controls>
        <a [routerLink]="['/noticias/edit', noticia.id]" mat-raised-button color="primary">
          Editar Noticia
        </a>
      </indev-section-controls>
    </section>

    <section indev-section class="container">
      <markdown [data]="noticia.html"></markdown>
    </section>

    <section indev-section class="container">
      <indev-section-title>Otras Noticias</indev-section-title>
      <indev-section-controls>
        <a [routerLink]="['/noticias']" mat-button color="primary">
          Ver más
        </a>
      </indev-section-controls>
      <div class="grid" *ngIf="noticias.length > 0; else emptyMessage">
        <indev-noticia-card *ngFor="let noticia of noticias" [noticia]="noticia">
        </indev-noticia-card>
      </div>
      <ng-template #emptyMessage>
        <span class="TextTheme--headline">
          ❗ No se encontraron noticias
        </span>
      </ng-template>
    </section>
  `
})
export class NoticiaDetailComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    public userRole: UserRoleService,
    private _el: ElementRef
  ) {}

  noticia: Noticia;
  user: boolean;
  noticias: Noticia[];

  ngOnInit() {
    this._route.data.subscribe(data => {
      this.noticia = data['noticia'] as Noticia;
      this.noticias = data['noticias'] as Noticia[];
    });

    this.userRole.isAdmin.subscribe(val => (this.user = val));
  }
}
