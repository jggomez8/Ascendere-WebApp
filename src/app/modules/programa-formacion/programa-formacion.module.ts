import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgramaFormacionComponent } from './pages/programa-formacion/programa-formacion.component';
import { ProgramaFormacionRoutingModule } from './programa-formacion.routing';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CursoResolver } from './providers/curso.resolver';

@NgModule({
  declarations: [ProgramaFormacionComponent, PortfolioComponent, CursoComponent],
  imports: [CommonModule, ProgramaFormacionRoutingModule, SharedModule],
  providers: [CursoResolver]
})
export class ProgramaFormacionModule {}
