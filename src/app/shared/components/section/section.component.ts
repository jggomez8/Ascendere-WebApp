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
        margin-top: 25px;
        margin-bottom: 15px;
        position: relative;
      }
      @media (min-width: 600px) {
        .section {
          margin-top: 35px;
          margin-bottom: 20px;
        }
      }
      @media (min-width: 840px) {
        .section {
          margin-top: 45px;
          margin-bottom: 25px;
        }
      }
      .section-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        flex-wrap: wrap;
        padding-bottom: 15px;
      }

      .section-header:empty {
        padding-bottom: 0;
      }
    `
  ]
})
export class SectionComponent {}
