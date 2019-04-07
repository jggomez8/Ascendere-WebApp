import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { JornadasRoutingModule } from './jornadas.routing';
import { JornadaDetailComponent } from './pages/jornada-detail/jornada-detail.component';
import { JornadaResolver } from './providers/jornada.resolver';
import { JornadasResolver } from './providers/jornadas.resolver';
import { PortafolioJornadasComponent } from './pages/portafolio-jornadas/portafolio-jornadas.component';
import { JornadaFormacionComponent } from './pages/jornada-formacion/jornada-formacion.component';
import { ValorarJornadaComponent } from './components/valorar-jornada/valorar-jornada.component';
import { JornadaActualComponent } from './pages/jornada-actual/jornada-actual.component';

@NgModule({
  declarations: [
    JornadaDetailComponent,
    JornadaActualComponent,
    PortafolioJornadasComponent,
    JornadaFormacionComponent,
    ValorarJornadaComponent
  ],
  imports: [CommonModule, SharedModule, JornadasRoutingModule],
  providers: [JornadaResolver, JornadasResolver]
})
export class JornadasModule {}
