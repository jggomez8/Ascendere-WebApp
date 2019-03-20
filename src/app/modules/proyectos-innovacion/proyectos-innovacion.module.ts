import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { ProyectosInnovacionRoutingModule } from './proyectos-innovacion.routing';

// declarations
import { ProyectosInnovacionComponent } from './pages/proyectos-innovacion/proyectos-innovacion.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

// providers
import { ProyectosResolver } from './providers/proyectos-innovacion.resolver';
import { ProyectoResolver } from './providers/proyecto.resolver';

@NgModule({
  declarations: [ProyectosInnovacionComponent, ProyectosComponent, ProyectoComponent],
  imports: [CommonModule, ProyectosInnovacionRoutingModule, SharedModule],
  providers: [ProyectosResolver, ProyectoResolver]
})
export class ProyectosInnovacionModule {}
