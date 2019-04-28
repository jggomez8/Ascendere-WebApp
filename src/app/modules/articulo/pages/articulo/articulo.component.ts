import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/interfaces/articulo';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'indev-articulo',
  template: `
    <indev-admin-actions>
      <a [routerLink]="['/articulo/admin/create']" mat-menu-item>Crear Articulo</a>
      <mat-divider></mat-divider>
      <a mat-menu-item [routerLink]="['/articulo/admin/create', articulo.id]">
        Editar Articulo
      </a>
      <a mat-menu-item (click)="delete()">Eliminar Articulo</a>
    </indev-admin-actions>

    <indev-header>
      <h2>Articulo</h2>
      <h1 class="TextTheme--display2">{{ articulo.name }}</h1>
    </indev-header>

    <section indev-section class="container">
      <markdown [data]="articulo.content"></markdown>
    </section>
  `
})
export class ArticuloComponent implements OnInit, OnDestroy {
  private _sub: Subscription;
  articulo: Articulo;

  constructor(
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _location: Location,
    private _afs: AngularFirestore
  ) {}

  ngOnInit() {
    this._sub = this._route.data.subscribe(data => {
      this.articulo = data['articulo'];
      this._snackBar.dismiss();
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  delete() {
    const popup = this._snackBar.open(
      `❗ Seguro que quieres eliminar el artículo: ${this.articulo.name}?`,
      'Confirmar'
    );
    popup.onAction().subscribe(async () => {
      await this._afs
        .collection('articulo')
        .doc(this.articulo.id)
        .delete();
      this._snackBar.open(`👍 El artículo fue eliminado correctamente.`);
      this._location.back();
    });
  }
}
