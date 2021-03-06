import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiaDetailComponent } from './pages/noticia-detail/noticia-detail.component';
import { NoticiaDetailResolver } from './providers/noticia-detail.resolver';
import { NoticiasRoutingModule } from './noticias.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NoticiasComponent, NoticiaDetailComponent],
  imports: [CommonModule, NoticiasRoutingModule, SharedModule],
  providers: [NoticiaDetailResolver]
})
export class NoticiasModule {}
