import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosInnovacionComponent } from './pages/proyectos-innovacion/proyectos-innovacion.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectosInnovacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosInnovacionRoutingModule { }
