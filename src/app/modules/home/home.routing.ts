import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CursosResolver } from 'src/app/shared/providers/cursos.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      cursos: CursosResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
