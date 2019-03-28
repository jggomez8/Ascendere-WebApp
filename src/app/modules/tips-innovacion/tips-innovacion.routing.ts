import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipsInnovacionComponent } from './pages/tips-innovacion/tips-innovacion.component';
import { TipsComponent } from './pages/tips/tips.component';
import { TipsResolver } from '../../shared/providers/tips.resolver';

const routes: Routes = [
  {
    path: '',
    component: TipsInnovacionComponent
  },
  {
    path: ':id',
    component: TipsComponent,
    resolve: {
      tips: TipsResolver
    },
    runGuardsAndResolvers: 'paramsChange'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsInnovacionRoutingModule {}
