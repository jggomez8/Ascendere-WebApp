import { Component } from '@angular/core';

@Component({
  selector: 'indev-shell-view',
  template: `
    <indev-navbar></indev-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class ShellViewComponent {}
