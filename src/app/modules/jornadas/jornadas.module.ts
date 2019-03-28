import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { JornadasRoutingModule } from './jornadas.routing';
import { JornadaDetailComponent } from './pages/jornada-detail/jornada-detail.component';
import { UltimaJornadaComponent } from './pages/ultima-jornada/ultima-jornada.component';
import { JornadaResolver } from './providers/jornada.resolver';
import { JornadasResolver } from './providers/jornadas.resolver';
import { PortafolioJornadasComponent } from './pages/portafolio-jornadas/portafolio-jornadas.component';
import { JornadaFormacionComponent } from './pages/jornada-formacion/jornada-formacion.component';

@NgModule({
  declarations: [JornadaDetailComponent, UltimaJornadaComponent, PortafolioJornadasComponent, JornadaFormacionComponent],
  imports: [CommonModule, SharedModule, JornadasRoutingModule],
  providers: [JornadaResolver, JornadasResolver]
})
export class JornadasModule {}
