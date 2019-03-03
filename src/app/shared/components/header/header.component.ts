import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'indev-header',
  template: `
    <header class="feature">
      <indev-container>
        <div class="feature--container">
          <div class="feature--header">
            <ng-content select="h1"></ng-content>
          </div>
          <div class="feature--image">
            <ng-content select="img"></ng-content>
          </div>
          <div class="feature--markdown">
            <ng-content select="markdown"></ng-content>
          </div>
        </div>
      </indev-container>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  // TODO: add metatag
}
