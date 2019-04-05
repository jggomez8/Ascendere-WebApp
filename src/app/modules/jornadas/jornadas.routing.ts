import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JornadasResolver } from './providers/jornadas.resolver';
import { JornadaDetailComponent } from './pages/jornada-detail/jornada-detail.component';
import { JornadaResolver } from './providers/jornada.resolver';
import { PortafolioJornadasComponent } from './pages/portafolio-jornadas/portafolio-jornadas.component';
import { JornadaFormacionComponent } from './pages/jornada-formacion/jornada-formacion.component';
import { JornadaActualComponent } from './pages/jornada-actual/jornada-actual.component';

const routes: Routes = [
  {
    path: '',
    component: JornadaActualComponent,
    resolve: {
      jornada: JornadaResolver
    }
  },
  {
    path: 'portafolio',
    component: PortafolioJornadasComponent,
    resolve: {
      jornadas: JornadasResolver
    },
    children: [
      {
        path: 'jornadas-reflexion',
        component: JornadaFormacionComponent
      },
      {
        path: ':id',
        component: JornadaDetailComponent,
        resolve: {
          jornada: JornadaResolver
        }
      },
      {
        path: '',
        redirectTo: 'jornadas-reflexion'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JornadasRoutingModule {}
