import { Component, OnInit, OnDestroy } from '@angular/core';
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
  `
})
export class NoticiaDetailComponent implements OnInit {
  constructor(private _route: ActivatedRoute, public userRole: UserRoleService) {}

  noticia: Noticia;
  user: boolean;

  ngOnInit() {
    this.noticia = this._route.snapshot.data['noticia'] as Noticia;

    this.userRole.isAdmin.subscribe(val => (this.user = val));
  }
}
