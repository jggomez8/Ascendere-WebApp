import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalleresAcademicosComponent } from './pages/talleres-academicos/talleres-academicos.component';

const routes: Routes = [
  {
    path: '',
    component: TalleresAcademicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalleresAcademicosRoutingModule { }
