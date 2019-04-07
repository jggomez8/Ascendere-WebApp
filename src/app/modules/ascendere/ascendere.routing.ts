import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AscendereComponent } from './pages/ascendere/ascendere.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { SaludoVicerrectorComponent } from './pages/saludo-vicerrector/saludo-vicerrector.component';

const routes: Routes = [
  {
    path: '',
    component: AscendereComponent
  },
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent
  },
  {
    path: 'saludo-vicerrector',
    component: SaludoVicerrectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AscendereRoutingModule {}
