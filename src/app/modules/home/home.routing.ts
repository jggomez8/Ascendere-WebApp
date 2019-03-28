import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CursosResolver } from 'src/app/shared/providers/cursos.resolver';
import { EncuentrosResolver } from 'src/app/shared/providers/encuentros.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      cursos: CursosResolver,
      encuentros: EncuentrosResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
