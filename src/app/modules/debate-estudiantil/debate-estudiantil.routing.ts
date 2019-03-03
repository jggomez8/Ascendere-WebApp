import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebateEstudiantilComponent } from './pages/debate-estudiantil/debate-estudiantil.component';

const routes: Routes = [
  {
    path: '',
    component: DebateEstudiantilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebateEstudiantilRoutingModule { }
