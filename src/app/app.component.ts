import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'indev-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(private _updates: SwUpdate, private _snackBar: MatSnackBar) {}
  ngOnInit() {
    // TODO: add api to sw
    this._updates.available.subscribe(event => {
      const snackBarRef = this._snackBar.open(
        'Existe una nueva version de esta pagina. Desea Actualizar?',
        'Actualizar'
      );

      snackBarRef.onAction().subscribe(() => {
        this._updates.activateUpdate().then(() => document.location.reload());
      });
    });
  }
}
