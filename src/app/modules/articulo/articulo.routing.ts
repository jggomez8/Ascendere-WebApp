import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './pages/articulo/articulo.component';

const routes: Routes = [
  {
    // TODO: add not found article or redirect
    path: ''
  },
  {
    path: ':id',
    component: ArticuloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticuloRoutingModule {}
