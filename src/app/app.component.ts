import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'indev-root',
  template: `
    <mat-progress-bar *ngIf="loading" mode="indeterminate" color="accent"></mat-progress-bar>

    <router-outlet></router-outlet>
  `,
  styles: [
    `
      mat-progress-bar {
        position: fixed;
        top: 0;
        z-index: 10000;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private _updates: SwUpdate,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  loading: boolean = false;

  ngOnInit() {
    /////////Loading/////////
    this._router.events.subscribe((event: Event) => {
      // user is navigating to new route
      if (event instanceof NavigationStart) {
        this.loading = true;
        return;
      }
      // cancel navigation
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;

        if (event instanceof NavigationEnd) {
          (<any>window).ga('create', 'UA-139840164-1', 'auto');
        }
        return;
      }
      // default case, do nothing
    });

    /////////Browser Update/////////
    // TODO: add api to sw
    this._updates.available.subscribe(event => {
      const snackBarRef = this._snackBar.open(
        'Existe una nueva version de esta pagina. Desea Actualizar?',
        'Actualizar',
        { duration: 120000 }
      );

      snackBarRef.onAction().subscribe(() => {
        this._updates.activateUpdate().then(() => document.location.reload());
      });
    });
  }
}
