import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosInnovacionComponent } from './pages/proyectos-innovacion/proyectos-innovacion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectoDetailComponent } from './pages/proyecto/proyecto-detail.component';
import { ProyectosInnovacionResolver } from '../../shared/providers/proyectos.resolver';
import { ProyectoResolver } from './providers/proyecto.resolver';
import { IsAdminGuard } from 'src/app/shared/providers/guards/is-admin.guard';
import { CreateProyectoComponent } from './pages/create-proyecto/create-proyecto.component';
import { ProyectosInnovacionAdminComponent } from './pages/proyectos-innovacion-admin/proyectos-innovacion-admin.component';

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
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: 'proyecto/:id',
    component: ProyectoDetailComponent,
    resolve: {
      proyecto: ProyectoResolver
    },
    runGuardsAndResolvers: 'paramsChange'
  },
  {
    path: 'admin',
    canActivate: [IsAdminGuard],
    children: [
      {
        path: '',
        component: ProyectosInnovacionAdminComponent,
        resolve: {
          proyectos: ProyectosInnovacionResolver
        }
      },
      {
        path: 'create',
        component: CreateProyectoComponent
      },
      {
        path: 'create/:id',
        component: CreateProyectoComponent,
        resolve: {
          proyecto: ProyectoResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosInnovacionRoutingModule {}
