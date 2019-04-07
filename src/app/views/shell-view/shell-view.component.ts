import { Component } from '@angular/core';

@Component({
  selector: 'indev-shell-view',
  template: `
    <indev-navbar></indev-navbar>
    <indev-go-top-fab></indev-go-top-fab>
    <main>
      <router-outlet></router-outlet>
    </main>
    <indev-footer></indev-footer>
  `
})
export class ShellViewComponent {}
