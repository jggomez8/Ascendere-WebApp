import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'indev-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss']
})
export class PersonalCardComponent implements AfterViewInit {
  constructor() {}

  @Input() persona;

  @ViewChild('markdown') markdownRef: MarkdownComponent;
  @ViewChild('content') contentRef: ElementRef;

  ngAfterViewInit() {
    try {
      const markdownEl = this.markdownRef.element.nativeElement as HTMLElement;
      const height = markdownEl.getBoundingClientRect().height;
      const contentEl = this.contentRef.nativeElement as HTMLElement;

      contentEl.style.setProperty(`--height`, ` ${height + 16}px`);
    } catch (err) {
      console.log(err);
    }
  }
}
