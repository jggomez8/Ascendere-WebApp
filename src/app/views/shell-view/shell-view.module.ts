import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellViewComponent } from './shell-view.component';
import { ShellViewRoutingModule } from './sheell-view.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MenuSummaryComponent } from './menu-summary/menu-summary.component';

@NgModule({
  declarations: [ShellViewComponent, NavbarComponent, MenuButtonComponent, MenuSummaryComponent],
  imports: [CommonModule, ShellViewRoutingModule, SharedModule]
})
export class ShellViewModule {}
