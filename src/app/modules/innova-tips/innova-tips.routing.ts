import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnovaTipsComponent } from './pages/innova-tips/innova-tips.component';

const routes: Routes = [
  {
    path: '',
    component: InnovaTipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnovaTipsRoutingModule {}
