import { Component, Input } from '@angular/core';
import { NavbarItem } from '../navbar-item.interface';

@Component({
  selector: 'indev-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {
  @Input() menuItemData: NavbarItem;
  @Input() color: string;
}
