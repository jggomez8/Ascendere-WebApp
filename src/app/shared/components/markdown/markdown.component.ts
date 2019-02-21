import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'indev-markdown',
  template: `
    <indev-container>
      <ng-content></ng-content>
    </indev-container>
  `,
  styleUrls: ['./markdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkdownComponent implements OnInit {
  constructor(private md: MarkdownService) {}

  ngOnInit() {
    this.md.renderer.heading = this.MD_Heading;
  }

  private MD_Heading(text: string, level: number): string {
    const levelStyles = [
      'TextTheme--display4',
      'TextTheme--display3',
      'TextTheme--display2',
      'TextTheme--display1',
      'TextTheme--headline',
      'TextTheme--title'
    ];

    return `
      <h${level} class="${levelStyles[level - 1]}" >
        ${text}
      </h${level}>
      `;
  }
}
