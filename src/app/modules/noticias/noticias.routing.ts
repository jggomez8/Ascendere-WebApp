import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiasResolver } from '../../shared/providers/noticias.resolver';
import { NoticiaDetailComponent } from './pages/noticia-detail/noticia-detail.component';
import { NoticiaDetailResolver } from './providers/noticia-detail.resolver';

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
      noticia: NoticiaDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule {}
