import { Component, Input } from '@angular/core';
import { NavbarItem } from '../../navbar-item.interface';

@Component({
  selector: 'indev-navbar-route-item',
  templateUrl: './navbar-route-item.component.html',
  styleUrls: ['./navbar-route-item.component.scss']
})
export class NavbarRouteItemComponent {
  @Input() routeItem: NavbarItem;
}
