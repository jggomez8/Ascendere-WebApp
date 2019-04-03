import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'indev-section-title',
  template: `
    <span class="TextTheme--display1" [ngClass]="{ before: before }">
      <ng-content></ng-content>
    </span>
  `,
  styles: [
    `
      span {
        margin-right: 15px;
      }
    `
  ],
  host: {
    '[attr.before]': 'before || null'
  },
  inputs: ['before']
})
export class SectionTitleComponent implements OnInit {
  constructor(private _elementRef: ElementRef) {}

  before: Boolean;

  ngOnInit(): void {
    this.before = this._elementRef.nativeElement.hasAttribute('before');
  }
}
