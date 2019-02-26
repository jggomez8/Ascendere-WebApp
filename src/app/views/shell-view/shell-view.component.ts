import { Component } from '@angular/core';

@Component({
  selector: 'indev-shell-view',
  template: `
    <indev-navbar></indev-navbar>
    <router-outlet></router-outlet>
  `
})
export class ShellViewComponent {}
