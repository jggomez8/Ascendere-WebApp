import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { InnovaTipsComponent } from './pages/innova-tips/innova-tips.component';

// provider
import { InnovaTipsResolver } from '../../shared/providers/innova-tips.resolver';

const routes: Routes = [
  {
    path: '',
    component: InnovaTipsComponent,
    resolve: {
      innovaTips: InnovaTipsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnovaTipsRoutingModule {}
