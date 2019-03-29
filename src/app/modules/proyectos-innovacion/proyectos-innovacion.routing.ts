import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// declarations
import { ProyectosInnovacionComponent } from './pages/proyectos-innovacion/proyectos-innovacion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectoDetailComponent } from './pages/proyecto/proyecto-detail.component';

// providers
import { ProyectosInnovacionResolver } from '../../shared/providers/proyectos.resolver';
import { ProyectoResolver } from './providers/proyecto.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProyectosInnovacionComponent,
    resolve: {
      proyectos: ProyectosInnovacionResolver
    }
  },
  {
    path: 'proyectos',
    component: ProyectosComponent,
    resolve: {
      proyectos: ProyectosInnovacionResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    
  },
  {
    path: 'proyecto/:id',
    component: ProyectoDetailComponent,
    resolve: {
      proyecto: ProyectoResolver
    },
    runGuardsAndResolvers: 'paramsChange'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosInnovacionRoutingModule {}
