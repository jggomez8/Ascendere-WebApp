import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JornadasResolver } from './providers/jornadas.resolver';
import { UltimaJornadaComponent } from './pages/ultima-jornada/ultima-jornada.component';
import { JornadaDetailComponent } from './pages/jornada-detail/jornada-detail.component';
import { JornadaResolver } from './providers/jornada.resolver';
import { PortafolioJornadasComponent } from './pages/portafolio-jornadas/portafolio-jornadas.component';

const routes: Routes = [
  {
    path: '',
    component: UltimaJornadaComponent,
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
        path: ':id',
        component: JornadaDetailComponent,
        resolve: {
          jornada: JornadaResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JornadasRoutingModule {}
