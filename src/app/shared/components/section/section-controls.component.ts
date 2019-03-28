import { Component, Input, ElementRef } from '@angular/core';

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
  ],
  inputs: ['no-negative-margin']
})
export class SectionControlsComponent {
  negativeMargin: boolean = true;

  constructor(private _el: ElementRef) {
    this.negativeMargin = !this._el.nativeElement.hasAttribute('no-negative-margin');
  }
}
