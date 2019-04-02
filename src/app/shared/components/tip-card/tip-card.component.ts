import { Component, OnInit, Input } from '@angular/core';
import { Tip } from 'src/app/interfaces/tip';

@Component({
  selector: 'indev-tip-card',
  templateUrl: './tip-card.component.html',
  styleUrls: ['./tip-card.component.scss']
})
export class TipCardComponent {
  @Input() tip: Tip;
}
