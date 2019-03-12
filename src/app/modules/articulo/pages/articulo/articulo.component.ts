import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'indev-articulo',
  template: `
  <div class="container">
    <markdown  [src]="markdown_source" (error)="onError($event)"></markdown>
  </div>
  `,
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit, OnDestroy {
  id: number;
  private _sub: any;

  // TODO: validate if file extension is required to load asset from server
  constructor(
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _location: Location,
  ) {}

  ngOnInit() {
    this._sub = this._route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  get markdown_source(): string {
    return `/assets/markdown/articulos/${this.id}.md`;
  }

  onError($event) {
    const snackBarRef = this._snackBar.open('No se pudo Cargar el articulo.', 'Regresar');

    snackBarRef.onAction().subscribe(() => {
      this._location.back();
    });
  }
}
