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
    this.negativeMargin = false;

    controlsEl.childNodes.forEach((el: HTMLElement) => {
      this.negativeMargin = this.negativeMargin || el.classList.contains('mat-button');
    });
  }
}
