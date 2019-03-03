import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitaminaIRoutingModule } from './vitamina-i.routing';
import { VitaminaIComponent } from './pages/vitamina-i/vitamina-i.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VitaminaIComponent],
  imports: [CommonModule, VitaminaIRoutingModule, SharedModule]
})
export class VitaminaIModule {}
