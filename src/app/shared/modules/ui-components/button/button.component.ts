import { Component, OnInit, ElementRef, Input, ViewEncapsulation } from '@angular/core';
/**
 * List of classes to add to IndevButton instances based on host attributes to
 * style as different variants.
 */
const BUTTON_HOST_ATTRIBUTES = [
  'indev-button',
  'indev-flat-button',
  'indev-icon-button',
  'indev-raised-button',
  'indev-stroked-button',
];

const BUTTON_HOST_COLOR = [
  'basic',
  'primary',
  'accent',
  'warning',
  'error',
];

@Component({
  selector: `button[indev-button], button[indev-raised-button], button[indev-icon-button], button[indev-stroked-button],
              button[indev-flat-button]`,
  exportAs: 'indevButton',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss',
    './button-theme.component.scss',
  ],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  @Input() color: string;

  /** Whether the button is icon button. */
  readonly isIconButton: boolean = this._hasHostAttributes('indev-icon-button');

  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
    // For each of the variant selectors that is prevent in the button's host
    // attributes, add the correct corresponding class.
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (this.elementRef.nativeElement as HTMLElement).classList.add(attr);
      }
    }
    // add color theme
    (this.elementRef.nativeElement as HTMLElement).classList.add(
      BUTTON_HOST_COLOR.includes(this.color) ? this.color : 'basic'
    );
  }

  /** Focuses the button. */
  focus(): void {
    this._getHostElement().focus();
  }

  _getHostElement() {
    return this.elementRef.nativeElement;
  }

  /** Gets whether the button has one of the given attributes. */
  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }
}

@Component({
  selector: `a[indev-button], a[indev-raised-button], a[indev-icon-button],
              a[indev-fab], a[indev-stroked-button],
              a[indev-flat-button]`,
  exportAs: 'indevButton',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss',
    './button-theme.component.scss',
  ],
  encapsulation: ViewEncapsulation.None
})
export class AnchorComponent extends ButtonComponent {
  constructor(public elementRef: ElementRef) {
    super(elementRef);
  }

}
