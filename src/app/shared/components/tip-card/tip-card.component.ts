import { Component, Input } from '@angular/core';
import { Tip } from 'src/app/interfaces/tip';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';

@Component({
  selector: 'indev-tip-card',
  template: `
    <div class="card">
      <div class="aspect-ratio">
        <img [src]="tip.img" [alt]="tip.srcAlt" />
      </div>
      <div class="content">
        <h4 class="TextTheme--title">
          {{ tip.name }}
        </h4>

        <span *ngIf="showType" class="TextTheme--overline">{{ tip.type }}</span>

        <div class="aspect-ratio">
          <markdown [data]="tip.description"></markdown>
        </div>

        <markdown [data]="tip.description"></markdown>

        <a
          [href]="tip.link"
          target="_blank"
          rel="noopener noreferrer"
          mat-stroked-button
          color="primary"
        >
          Ver más
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./tip-card.component.scss']
})
export class TipCardComponent {
  constructor(private _route: ActivatedRoute) {}

  @Input() tip: Tip;

  get showType() {
    return this._route.component === HomeComponent;
  }
}
