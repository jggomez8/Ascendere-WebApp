import { Component, Input } from '@angular/core';

@Component({
  selector: 'indev-tip-section',
  templateUrl: './tip-section.component.html',
  styleUrls: ['./tip-section.component.scss']
})
export class TipSectionComponent {
  @Input() name;
  @Input() img;

  get imgAlt() {
    return `${this.name} Image`;
  }

}
