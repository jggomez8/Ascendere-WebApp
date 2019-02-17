import { Component } from '@angular/core';

@Component({
  selector: 'section[indev-section]',
  template: `
    <div class="section">
      <div class="section-header">
        <ng-content select="indev-section-title"></ng-content>
        <ng-content select="indev-section-controls"></ng-content>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .section {
        padding: 35px 0 25px 0;
      }
      .section-header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: baseline;

        /* space header from content */
        padding-bottom: 15px;
      }
    `
  ]
})
export class SectionComponent {}
