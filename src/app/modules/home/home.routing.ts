import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CursosResolver } from 'src/app/shared/providers/cursos.resolver';
import { EncuentrosResolver } from 'src/app/shared/providers/encuentros.resolver';
import { NoticiasResolver } from 'src/app/shared/providers/noticias.resolver';
import { TipsResolver } from 'src/app/shared/providers/tips.resolver';
import { InnovaTipsResolver } from 'src/app/shared/providers/innova-tips.resolver';
import { ProyectosInnovacionResolver } from 'src/app/shared/providers/proyectos.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      cursos: CursosResolver,
      encuentros: EncuentrosResolver,
      noticias: NoticiasResolver,
      tips: TipsResolver,
      innovaTips: InnovaTipsResolver,
      proyectos: ProyectosInnovacionResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
