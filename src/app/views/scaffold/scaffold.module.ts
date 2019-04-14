import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaffoldComponent } from './scaffold.component';
import { ScaffoldRoutingModule } from './scaffold.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { DrawerService } from './providers/drawer.service';

@NgModule({
  declarations: [
    ScaffoldComponent,
    MenuButtonComponent,
    FooterComponent,
    AppBarComponent,
    DrawerComponent
  ],
  imports: [CommonModule, ScaffoldRoutingModule, SharedModule],
  providers: [DrawerService]
})
export class ScaffoldModule {}
