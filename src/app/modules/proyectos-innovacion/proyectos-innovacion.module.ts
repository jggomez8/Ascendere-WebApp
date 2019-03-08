import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosInnovacionComponent } from './pages/proyectos-innovacion/proyectos-innovacion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProyectosInnovacionRoutingModule } from './proyectos-innovacion.routing';

@NgModule({
  declarations: [ProyectosInnovacionComponent],
  imports: [CommonModule, ProyectosInnovacionRoutingModule, SharedModule]
})
export class ProyectosInnovacionModule {}
