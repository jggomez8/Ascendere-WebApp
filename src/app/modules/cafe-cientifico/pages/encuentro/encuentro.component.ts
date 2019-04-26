import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { EncuentrosService } from '../../providers/encuentros.service';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'indev-encuentro',
  template: `
    <indev-admin-actions>
      <a [routerLink]="['/cafe-cientifico/admin/create']" mat-menu-item>Crear Encuentro</a>
      <mat-divider></mat-divider>
      <a mat-menu-item>ver Inscritos</a>
      <mat-divider></mat-divider>
      <a mat-menu-item [routerLink]="['/cafe-cientifico/admin/create', encuentro.id]">
        Editar Encuentro
      </a>
      <a mat-menu-item (click)="delete()">Eliminar Encuentro</a>
    </indev-admin-actions>

    <indev-header>
      <h1 class="TextTheme--display2">☕ {{ encuentro.name }}</h1>
      <h2>Fecha 📆 {{ encuentro.date | date: 'fullDate' }}</h2>
    </indev-header>

    <section indev-section class="container">
      <router-outlet></router-outlet>
    </section>
  `
})
export class EncuentroComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _encuentrosService: EncuentrosService,
    private _snackBar: MatSnackBar,
    private _location: Location
  ) {}

  encuentro: Encuentro;

  /**
   * Get this encuentro data, and verify if this user is an Admin, in order to
   * edit the data
   */
  ngOnInit() {
    this.encuentro = this._route.snapshot.data['encuentro'];
  }

  delete() {
    const popup = this._snackBar.open(
      `❗ Seguro que quieres eliminar el encuentro: ${this.encuentro.name}?`,
      'Confirmar'
    );
    popup.onAction().subscribe(async () => {
      await this._encuentrosService.encuentrosCollection.doc(this.encuentro.id).delete();
      this._snackBar.open(`👍 El encuentro fue eliminado correctamente.`);
      this._location.back();
    });
  }
}
