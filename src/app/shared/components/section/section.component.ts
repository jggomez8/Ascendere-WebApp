import { Component, Input } from '@angular/core';

@Component({
  selector: 'section[indev-section]',
  template: `
    <div class="section">
      <div class="section-header" [ngClass]="{ wrap: wrap }">
        <ng-content select="indev-section-title"></ng-content>
        <ng-content select="indev-section-controls"></ng-content>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .section {
        padding: 25px 0 15px 0;
      }
      @media screen and(min-width: 840px) {
        .section {
          padding: 35px 0 25px 0;
        }
      }
      .section-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        /* space header from content */
        padding-bottom: 15px;
      }

      .wrap {
        flex-wrap: wrap;
      }

      .section-header:empty {
        padding-bottom: 0;
      }
    `
  ]
})
export class SectionComponent {
  // TODO: add html attribute
  // TODO: add baseline if controls have specific type of button
  @Input() wrap: boolean = true;
}
