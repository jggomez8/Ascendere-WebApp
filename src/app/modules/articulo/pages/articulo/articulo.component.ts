import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/interfaces/articulo';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'indev-articulo',
  template: `
    <indev-header>
      <h1 class="TextTheme--display2">
        {{ articulo.name }}
      </h1>
    </indev-header>
    <section indev-section class="container">
      <markdown *ngIf="articulo.hasContent; else source" [data]="articulo.content"></markdown>
      <ng-template #source>
        <markdown [src]="articulo.source" (error)="onError($event)"></markdown>
      </ng-template>
    </section>
  `,
  styles: [
    `
      h1::before {
        content: '📚 ';
      }
    `
  ]
})
export class ArticuloComponent implements OnInit, OnDestroy {
  private _sub: Subscription;
  articulo: Articulo;

  constructor(
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _location: Location
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

  onError($event) {
    const snackBarRef = this._snackBar.open('No se pudo Cargar el articulo.', 'Regresar');

    snackBarRef.onAction().subscribe(() => {
      this._location.back();
    });
  }
}
