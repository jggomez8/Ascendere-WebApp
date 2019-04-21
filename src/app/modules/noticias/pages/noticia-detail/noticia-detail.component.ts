import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'indev-noticia-detail',
  template: `
    <indev-admin-actions>
      <a [routerLink]="['/noticias/create']" mat-menu-item>
        Nueva Noticia
      </a>
      <mat-divider></mat-divider>
      <a mat-menu-item [routerLink]="['/noticias/edit', noticia.id]">
        Editar Noticia
      </a>
      <button mat-menu-item (click)="delete()">
        Eliminar Noticia
      </button>
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
  constructor(
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _location: Location,
    private _afs: AngularFirestore
  ) {}

  noticia: Noticia;
  user: boolean;
  noticias: Noticia[];

  private _popUpSub: Subscription;

  ngOnInit() {
    this._route.data.subscribe(data => {
      this.noticia = data['noticia'] as Noticia;
      this.noticias = data['noticias'] as Noticia[];
    });
  }

  delete() {
    const popup = this._snackBar.open(
      `❗ Seguro que quieres eliminar la noticia: ${this.noticia.name}?`,
      'Confirmar'
    );
    this._popUpSub = popup.onAction().subscribe(async () => {
      await this._afs
        .collection('observatorio/edutendencias/noticias')
        .doc(this.noticia.id)
        .delete();
      this._snackBar.open(`👍 La noticia fue eliminada correctamente.`);
      this._location.back();
    });
  }
}
