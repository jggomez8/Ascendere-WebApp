import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// declarations
import { ProgramaFormacionComponent } from './pages/programa-formacion/programa-formacion.component';

// providers
import { CursosResolver } from './providers/cursos.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProgramaFormacionComponent,
    resolve: {
      cursos: CursosResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramaFormacionRoutingModule {}
