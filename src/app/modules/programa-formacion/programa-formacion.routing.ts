import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramaFormacionComponent } from './pages/programa-formacion/programa-formacion.component';
import { CursosResolver } from './providers/cursos.resolver';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CursoResolver } from './providers/curso.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProgramaFormacionComponent,
    resolve: {
      cursos: CursosResolver
    }
  },
  {
    path: 'portafolio',
    component: PortfolioComponent,
    resolve: {
      cursos: CursosResolver
    }
  },
  {
    path: 'curso/:id',
    component: CursoComponent,
    resolve: {
      curso: CursoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramaFormacionRoutingModule {}
