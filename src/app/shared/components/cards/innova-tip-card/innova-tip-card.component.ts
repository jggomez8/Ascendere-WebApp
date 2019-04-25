import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { InnovaTip } from 'src/app/interfaces/innova-tip';

@Component({
  selector: 'indev-innova-tip-card',
  template: `
    <div class="card" [routerLink]="['/innova-tips/tip', innovaTip.id]">
      <div class="aspect-ratio">
        <img [src]="innovaTip.img" [alt]="innovaTip.altImg" />
      </div>
      <div class="content">
        <h3 class="TextTheme--title">{{ innovaTip.name }}</h3>
        <span class="TextTheme--overline">{{ innovaTip.publishedAt | date }}</span>
      </div>
      <div class="actions">
        <mat-icon>play_arrow</mat-icon>
      </div>
    </div>
  `,
  styleUrls: ['./innova-tip-card.component.scss']
})
export class InnovaTipCardComponent {
  @Input() innovaTip: InnovaTip;
}
