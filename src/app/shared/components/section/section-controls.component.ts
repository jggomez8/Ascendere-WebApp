import { Component, ElementRef, AfterContentInit, ViewChild } from '@angular/core';

@Component({
  selector: 'indev-section-controls',
  template: `
    <div #controls class="section-controls" [ngClass]="{ 'negative-margin': negativeMargin }">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .section-controls {
        display: flex;
        flex-wrap: wrap;
      }
      .section-controls > * {
        margin-top: 50px !important;
        color: green !important;
      }
      .negative-margin {
        margin-left: -16px;
        margin-right: -16px;
      }
    `
  ]
})
export class SectionControlsComponent implements AfterContentInit {
  negativeMargin: boolean;

  @ViewChild('controls') controlsRef: ElementRef;

  constructor() {}

  ngAfterContentInit(): void {
    const controlsEl = this.controlsRef.nativeElement as HTMLElement;
    const tempLength = controlsEl.childNodes.length;

    this.negativeMargin = false;

    controlsEl.childNodes.forEach((el: HTMLElement, index: number) => {
      this.negativeMargin = this.negativeMargin || el.classList.contains('mat-button');

      // also add margin to guive elements a little of space
      el.style.marginTop = '10px';
      if (!el.classList.contains('mat-button') && index !== tempLength - 1)
        el.style.marginRight = '10px';
    });
  }
}
