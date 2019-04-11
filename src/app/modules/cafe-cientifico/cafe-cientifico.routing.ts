import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeCientificoComponent } from './pages/cafe-cientifico/cafe-cientifico.component';
import { EncuentrosResolver } from '../../shared/providers/encuentros.resolver';
import { EncuentroDetailComponent } from './pages/encuentro-detail/encuentro-detail.component';
import { EncuentroResolver } from './resolver/encuentro.resolver';
import { IncripcionEncuentroComponent } from './pages/incripcion-encuentro/incripcion-encuentro.component';
import { EncuentroComponent } from './pages/encuentro/encuentro.component';
import { CafeCientificoAdminComponent } from './pages/cafe-cientifico-admin/cafe-cientifico-admin.component';
import { CreateEncuentroComponent } from './pages/create-encuentro/create-encuentro.component';
import { IsAdminGuard } from 'src/app/shared/providers/guards/is-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: CafeCientificoComponent,
    resolve: {
      encuentros: EncuentrosResolver
    }
  },
  {
    path: 'encuentro/:id',
    component: EncuentroComponent,
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    resolve: {
      encuentro: EncuentroResolver
    },
    children: [
      {
        path: '',
        component: EncuentroDetailComponent
      },
      {
        path: 'inscripcion',
        component: IncripcionEncuentroComponent
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [IsAdminGuard],
    component: CafeCientificoAdminComponent
  },
  {
    path: 'admin/create/:id',
    canActivate: [IsAdminGuard],
    component: CreateEncuentroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeCientificoRoutingModule {}
