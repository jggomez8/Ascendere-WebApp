import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indev-section-controls',
  template: `
    <div class="section-controls">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .section-controls {
        display: flex;
        flex-wrap: wrap;
        margin-left: -15px;
        margin-right: -15px;
      }
    `
  ]
})
export class SectionControlsComponent {}
