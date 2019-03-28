import { Component, Input } from '@angular/core';

@Component({
  selector: 'indev-section-controls',
  template: `
    <div class="section-controls" [ngClass]="{ 'negative-margin': negativeMargin }">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .section-controls {
        display: flex;
        flex-wrap: wrap;
      }
      .negative-margin {
        margin-left: -16px;
        margin-right: -16px;
      }
    `
  ]
})
export class SectionControlsComponent {
  // TODO: add html attribute
  @Input() negativeMargin: boolean = true;
}
