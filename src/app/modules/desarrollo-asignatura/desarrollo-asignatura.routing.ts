import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesarrolloAsignaturaComponent } from './pages/desarrollo-asignatura/desarrollo-asignatura.component';

const routes: Routes = [
  {
    path: '',
    component: DesarrolloAsignaturaComponent,
    resolve: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesarrolloAsignaturaRoutingModule {}
