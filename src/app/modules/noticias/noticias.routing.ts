import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiasResolver } from '../../shared/providers/noticias.resolver';
import { NoticiaDetailComponent } from './pages/noticia-detail/noticia-detail.component';
import { NoticiaDetailResolver } from './providers/noticia-detail.resolver';
import { CreateNoticiaComponent } from './pages/create-noticia/create-noticia.component';
import { IsAdminGuard } from 'src/app/shared/providers/guards/is-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: NoticiasComponent,
    resolve: {
      noticias: NoticiasResolver
    }
  },
  {
    path: 'noticia/:id',
    component: NoticiaDetailComponent,
    resolve: {
      noticia: NoticiaDetailResolver,
      noticias: NoticiasResolver
    },
    runGuardsAndResolvers: 'paramsChange'
  },
  {
    path: 'create',
    component: CreateNoticiaComponent,
    canActivate: [IsAdminGuard]
  },
  {
    path: 'edit/:id',
    component: CreateNoticiaComponent,
    resolve: {
      noticia: NoticiaDetailResolver
    },
    canActivate: [IsAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule {}
