import { Component } from '@angular/core';

@Component({
  selector: 'indev-section-header',
  template: `
    <div class="section-header">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .section-header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 10px;
      }
    `
  ]
})
export class SectionHeaderComponent {}
