import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AscendereRoutingModule } from './ascendere.routing';
import { AscendereComponent } from './pages/ascendere/ascendere.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicioCardComponent } from './components/servicio-card/servicio-card.component';

@NgModule({
  declarations: [AscendereComponent, ServicioCardComponent],
  imports: [CommonModule, AscendereRoutingModule, SharedModule]
})
export class AscendereModule {}
