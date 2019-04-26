import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnovaTipsComponent } from './pages/innova-tips/innova-tips.component';
import { InnovaTipsResolver } from '../../shared/providers/innova-tips.resolver';
import { IsAdminGuard } from 'src/app/shared/providers/guards/is-admin.guard';
import { TipComponent } from './pages/tip/tip.component';
import { InnovaTipResolver } from './providers/innova-tip.resolve';
import { CreateInnovaTipComponent } from './pages/create-innova-tip/create-innova-tip.component';

const routes: Routes = [
  {
    path: '',
    component: InnovaTipsComponent,
    resolve: {
      innovaTips: InnovaTipsResolver
    }
  },
  {
    path: 'tip/:id',
    component: TipComponent,
    resolve: {
      innovaTips: InnovaTipsResolver,
      innovaTip: InnovaTipResolver
    }
  },
  {
    path: 'admin',
    canActivate: [IsAdminGuard],
    children: [
      {
        path: 'create',
        component: CreateInnovaTipComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnovaTipsRoutingModule {}
