import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProyectosInnovacionRoutingModule } from './proyectos-innovacion.routing';
import { ProyectosInnovacionComponent } from './pages/proyectos-innovacion/proyectos-innovacion.component';
import { ProyectoDetailComponent } from './pages/proyecto/proyecto-detail.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectoResolver } from './providers/proyecto.resolver';

@NgModule({
  declarations: [ProyectosInnovacionComponent, ProyectosComponent, ProyectoDetailComponent],
  imports: [CommonModule, ProyectosInnovacionRoutingModule, SharedModule],
  providers: [ProyectoResolver]
})
export class ProyectosInnovacionModule {}
