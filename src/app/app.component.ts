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
      let res = confirm('Existe una nueva version de esta pagina. Desea Actualizar?');
      if (res) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }
}
