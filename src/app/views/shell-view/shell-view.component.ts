import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'indev-shell-view',
  template: `
    <indev-navbar></indev-navbar>
    <mat-progress-bar *ngIf="loading" mode="indeterminate" color="accent"></mat-progress-bar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      main {
        overflow: auto;
      }
    `
  ]
})
export class ShellViewComponent implements OnInit {
  loading: boolean = false;

  constructor(private _router: Router) {}

  ngOnInit() {
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
        return;
      }
      // default case, do nothing
    });
  }
}
