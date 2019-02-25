import { Component } from '@angular/core';

@Component({
  selector: 'indev-container',
  template: `
    <div class="grid-container">
      <div></div>
      <div>
        <ng-content></ng-content>
      </div>
      <div></div>
    </div>
  `,
  styles: [
    `
      /*
        Container is not centered at all, left side is bigger than right side
      */
      .grid-container {
        display: grid;
        grid-template-columns: minmax(16px, 3fr) minmax(auto, 1400px) minmax(16px, 2fr);
      }
    `
  ]
})
export class ContainerComponent {
  constructor() {}
}
