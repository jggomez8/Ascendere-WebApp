import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellViewComponent } from './shell-view.component';
import { ShellViewRoutingModule } from './sheell-view.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarRouteItemComponent } from './components/navbar-route-item/navbar-route-item.component';
import { HeaderMenuItemComponent } from './components/header-menu-item/header-menu-item.component';
import { SectionMenuHeaderComponent } from './components/section-menu-header/section-menu-header.component';
import { SectionMenuSummaryComponent } from './components/section-menu-summary/section-menu-summary.component';
import { HeaderMenuSummaryComponent } from './components/header-menu-summary/header-menu-summary.component';

@NgModule({
  declarations: [
    ShellViewComponent,
    NavbarComponent,
    NavbarRouteItemComponent,
    HeaderMenuItemComponent,
    SectionMenuHeaderComponent,
    SectionMenuSummaryComponent,
    HeaderMenuSummaryComponent
  ],
  imports: [CommonModule, ShellViewRoutingModule, SharedModule]
})
export class ShellViewModule {}
