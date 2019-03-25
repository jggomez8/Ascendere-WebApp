import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { ArticuloResolver } from './providers/articulo.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: ArticuloComponent,
    resolve: {
      articulo: ArticuloResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticuloRoutingModule {}
