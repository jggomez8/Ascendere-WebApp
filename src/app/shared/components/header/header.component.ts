import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'indev-header',
  template: `
    <header class="feature" [ngStyle]="style">
      <div class="container">
        <div class="feature--container">
          <div class="feature--header TextTheme--display2">
            <ng-content select="h1"></ng-content>
          </div>
          <div class="feature--image">
            <ng-content select="img"></ng-content>
          </div>
          <div class="feature--markdown">
            <ng-content select="markdown"></ng-content>
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  // TODO: add metatag

  @Input() style: Object = {};
}
