import { Component } from '@angular/core';
import { NavbarLinks } from '../../interfaces/navbar-item.interface';
import { DrawerService } from '../../providers/drawer.service';

@Component({
  selector: 'indev-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent extends NavbarLinks {
  constructor(public drawerState: DrawerService) {
    super();
  }
}
