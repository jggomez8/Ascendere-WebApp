import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipsInnovacionComponent } from './pages/tips-innovacion/tips-innovacion.component';
import { TipsComponent } from './pages/tips/tips.component';

const routes: Routes = [
  {
    path: '',
    component: TipsInnovacionComponent
  },
  {
    path: ':id',
    component: TipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsInnovacionRoutingModule {}
