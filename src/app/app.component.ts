import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'indev-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(updates: SwUpdate) {
    // TODO: add message or notification
    // TODO: add to sw api
    updates.available.subscribe(event => {
      updates.activateUpdate().then(document.location.reload);
    });
  }
}
