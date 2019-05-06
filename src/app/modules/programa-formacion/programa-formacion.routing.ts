import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramaFormacionComponent } from './pages/programa-formacion/programa-formacion.component';
import { CursosResolver } from '../../shared/providers/cursos.resolver';
import { CursoComponent } from './pages/curso/curso.component';
import { CursoResolver } from './providers/curso.resolver';
import { PortfolioCursosComponent } from './pages/portfolio-cursos/portfolio-cursos.component';
import { IsAdminGuard } from 'src/app/shared/providers/guards/is-admin.guard';
import { CreateCursoComponent } from './pages/create-curso/create-curso.component';
import { BannerTypeResolver } from './providers/bannerType.resolver';

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
    component: PortfolioCursosComponent,
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
  },
  {
    path: 'admin',
    canActivate: [IsAdminGuard],
    children: [
      {
        path: 'create',
        component: CreateCursoComponent,
        resolve: {
          types: BannerTypeResolver
        }
      },
      {
        path: 'create/:id',
        component: CreateCursoComponent,
        runGuardsAndResolvers: 'paramsChange',
        resolve: {
          curso: CursoResolver,
          types: BannerTypeResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramaFormacionRoutingModule {}
