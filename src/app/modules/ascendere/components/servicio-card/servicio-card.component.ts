import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'indev-servicio-card',
  templateUrl: './servicio-card.component.html',
  styleUrls: ['./servicio-card.component.scss']
})
export class ServicioCardComponent implements OnInit {
  /**
   * Name of data to be loaded by the component
   */
  @Input() name: string;

  /**
   * Different name cases used for images and links by the cards
   */
  kebabName: string;
  camelName: string;

  ngOnInit() {
    this.kebabName = this.name.toLowerCase().replace(/[^\w]+/g, '-');

    // Transform into upper camel case
    this.camelName = this.name
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w)/g, letter => letter.toUpperCase())
      .replace(/\s+/g, '');
  }

  get imageSrc(): string {
    return `/assets/images/${this.camelName}.svg`;
  }
  get imageAlt(): string {
    return `${this.camelName} Icon`;
  }

  get markdownSrc(): string {
    return `/assets/markdown/${this.kebabName}/${this.kebabName}.md`;
  }

  get routerLink(): Array<string> {
    return ['/', this.kebabName];
  }
}
