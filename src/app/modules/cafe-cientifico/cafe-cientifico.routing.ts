import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeCientificoComponent } from './pages/cafe-cientifico/cafe-cientifico.component';
import { EncuentrosResolver } from '../../shared/providers/encuentros.resolver';
import { EncuentroDetailComponent } from './pages/encuentro-detail/encuentro-detail.component';
import { EncuentroResolver } from './resolver/encuentro.resolver';

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
    component: EncuentroDetailComponent,
    resolve: {
      encuentro: EncuentroResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeCientificoRoutingModule {}
