import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { ArticuloResolver } from './providers/articulo.resolver';
import { IsAdminGuard } from 'src/app/shared/providers/guards/is-admin.guard';
import { CreateArticuloComponent } from './pages/create-articulo/create-articulo.component';

const routes: Routes = [
  {
    path: ':id',
    component: ArticuloComponent,
    resolve: {
      articulo: ArticuloResolver
    }
  },
  {
    path: 'admin',
    canActivate: [IsAdminGuard],
    children: [
      {
        path: 'create',
        component: CreateArticuloComponent
      },
      {
        path: 'create/:id',
        component: CreateArticuloComponent,
        resolve: {
          articulo: ArticuloResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticuloRoutingModule {}
