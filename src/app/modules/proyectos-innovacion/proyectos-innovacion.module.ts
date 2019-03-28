import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { ProyectosInnovacionRoutingModule } from './proyectos-innovacion.routing';

// declarations
import { ProyectosInnovacionComponent } from './pages/proyectos-innovacion/proyectos-innovacion.component';
import { ProyectoDetailComponent } from './pages/proyecto/proyecto-detail.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

// providers
import { ProyectosResolver } from './providers/proyectos.resolver';
import { ProyectoResolver } from './providers/proyecto.resolver';

@NgModule({
  declarations: [ProyectosInnovacionComponent, ProyectosComponent, ProyectoDetailComponent],
  imports: [CommonModule, ProyectosInnovacionRoutingModule, SharedModule],
  providers: [ProyectosResolver, ProyectoResolver]
})
export class ProyectosInnovacionModule {}
