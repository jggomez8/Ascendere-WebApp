import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { CafeCientificoComponent } from './pages/cafe-cientifico/cafe-cientifico.component';

// providers
import { EncuentrosResolver } from './resolver/encuentros.resolver';

const routes: Routes = [
  {
    path: '',
    component: CafeCientificoComponent,
    resolve: {
      encuentros: EncuentrosResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeCientificoRoutingModule {}
