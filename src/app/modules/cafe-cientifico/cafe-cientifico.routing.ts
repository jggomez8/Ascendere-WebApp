import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeCientificoComponent } from './pages/cafe-cientifico/cafe-cientifico.component';
import { EncuentrosResolver } from '../../shared/providers/encuentros.resolver';
import { EncuentroDetailComponent } from './pages/encuentro-detail/encuentro-detail.component';
import { EncuentroResolver } from './resolver/encuentro.resolver';
import { IncripcionEncuentroComponent } from './pages/incripcion-encuentro/incripcion-encuentro.component';
import { EncuentroComponent } from './pages/encuentro/encuentro.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeCientificoRoutingModule {}
