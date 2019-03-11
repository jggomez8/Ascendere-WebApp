import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellViewComponent } from './shell-view.component';
import { ShellViewRoutingModule } from './shell-view.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { MenuSummaryComponent } from './components/menu-summary/menu-summary.component';
import { FooterComponent } from './components/footer/footer.component';
import { FabComponent } from './components/fab/fab.component';

@NgModule({
  declarations: [
    ShellViewComponent,
    NavbarComponent,
    MenuButtonComponent,
    MenuSummaryComponent,
    FooterComponent,
    FabComponent
  ],
  imports: [CommonModule, ShellViewRoutingModule, SharedModule]
})
export class ShellViewModule {}
