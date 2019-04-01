import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AscendereComponent } from './pages/ascendere/ascendere.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {
    path: '',
    component: AscendereComponent
  },
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AscendereRoutingModule {}
