import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramaFormacionComponent } from './pages/programa-formacion/programa-formacion.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramaFormacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramaFormacionRoutingModule {}
