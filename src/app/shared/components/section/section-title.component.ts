import { Component } from '@angular/core';

@Component({
  selector: 'indev-section-title',
  template: `
    <span class="TextTheme--display1">
      <ng-content></ng-content>
    </span>
  `,
  styles: [
    `
      span {
        margin-right: 15px;
      }
    `
  ]
})
export class SectionTitleComponent {}
