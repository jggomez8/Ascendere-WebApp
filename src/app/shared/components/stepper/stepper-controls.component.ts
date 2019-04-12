import { Component, ElementRef, AfterContentInit, ViewChild } from '@angular/core';

@Component({
  selector: 'step-controls',
  template: `
    <div
      #controls
      class="step-controls"
      [ngClass]="{ 'negative-margin': negativeMargin, 'margin-top': marginTop }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .step-controls {
        display: flex;
        flex-wrap: wrap;
      }
      .negative-margin {
        margin-left: -16px;
        margin-right: -16px;
      }
      .margin-top {
        margin-top: 10px;
      }
    `
  ]
})
export class StepControlsComponent implements AfterContentInit {
  negativeMargin: boolean;
  marginTop: boolean;

  @ViewChild('controls') controlsRef: ElementRef;

  ngAfterContentInit(): void {
    const controlsEl = this.controlsRef.nativeElement as HTMLElement;
    this.negativeMargin = false;
    controlsEl.childNodes.forEach((el: HTMLElement) => {
      this.negativeMargin = this.negativeMargin || el.classList.contains('mat-button');
    });

    this.marginTop = false;
    controlsEl.childNodes.forEach((el: HTMLElement) => {
      this.marginTop =
        this.marginTop ||
        el.classList.contains('mat-flat-button') ||
        el.classList.contains('mat-stroked-button') ||
        el.classList.contains('mat-raised-button');
    });
  }
}
