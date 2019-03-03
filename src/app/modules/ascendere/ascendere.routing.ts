import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AscendereComponent } from './pages/ascendere/ascendere.component';

const routes: Routes = [
  {
    path: '',
    component: AscendereComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AscendereRoutingModule {}
