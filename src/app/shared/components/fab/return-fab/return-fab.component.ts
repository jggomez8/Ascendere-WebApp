import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'indev-return-fab',
  template: `
    <div class="fab">
      <button mat-icon-button>
        <mat-icon aria-label="Navigate one page back" (click)="navigateBack()">
          arrow_backward
        </mat-icon>
      </button>
    </div>
  `,
  styles: [
    `
      .fab {
        position: absolute;
        z-index: 200;
        top: 35px;
        left: 16px;
      }
      @media screen and (min-width: 600px) {
        .fab {
          top: 40px;
          left: 24px;
        }
      }
    `
  ]
})
export class ReturnFabComponent {
  constructor(private _location: Location) {}

  navigateBack() {
    this._location.back();
  }
}
