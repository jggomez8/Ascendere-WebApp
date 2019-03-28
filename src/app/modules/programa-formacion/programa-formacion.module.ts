import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgramaFormacionComponent } from './pages/programa-formacion/programa-formacion.component';
import { ProgramaFormacionRoutingModule } from './programa-formacion.routing';
import { CursoComponent } from './pages/curso/curso.component';
import { CursoResolver } from './providers/curso.resolver';
import { PortfolioCursosComponent } from './pages/portfolio-cursos/portfolio-cursos.component';

@NgModule({
  declarations: [ProgramaFormacionComponent, PortfolioCursosComponent, CursoComponent],
  imports: [CommonModule, ProgramaFormacionRoutingModule, SharedModule],
  providers: [CursoResolver]
})
export class ProgramaFormacionModule {}
