import { Component, Input } from '@angular/core';
import { NavbarItem } from '../navbar-item.interface';

@Component({
  selector: 'indev-menu-summary',
  templateUrl: './menu-summary.component.html',
  styleUrls: ['./menu-summary.component.scss']
})
export class MenuSummaryComponent {
  @Input() menuSummaryData: NavbarItem;
}
