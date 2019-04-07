import { Component, Input } from '@angular/core';

@Component({
  selector: 'indev-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss']
})
export class FaqCardComponent {
  constructor() {}

  @Input() name: string = null;
  @Input() goto: String = null;
  // @Input() routerLink: String;

  get faqSrc() {
    return `/assets/markdown/desarrollo-asignatura/${this.name}.md`;
  }

  get hasGoto() {
    return this.goto !== null;
  }

  get routerLink() {
    return ['/articulo', this.name];
  }
}
