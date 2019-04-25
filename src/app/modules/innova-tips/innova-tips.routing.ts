import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { InnovaTipsComponent } from './pages/innova-tips/innova-tips.component';

// provider
import { InnovaTipsResolver } from '../../shared/providers/innova-tips.resolver';
import { IsAdminGuard } from 'src/app/shared/providers/guards/is-admin.guard';
import { CreateComponent } from './pages/create/create.component';
import { TipComponent } from './pages/tip/tip.component';
import { InnovaTipResolver } from './providers/innova-tip.resolve';

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
        component: CreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnovaTipsRoutingModule {}
