import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiaDetailComponent } from './pages/noticia-detail/noticia-detail.component';
import { NoticiaDetailResolver } from './providers/noticia-detail.resolver';
import { NoticiasRoutingModule } from './noticias.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateNoticiaComponent } from './pages/create-noticia/create-noticia.component';
import { NoticiasService } from './providers/noticias.service';

@NgModule({
  declarations: [NoticiasComponent, NoticiaDetailComponent, CreateNoticiaComponent],
  imports: [CommonModule, NoticiasRoutingModule, SharedModule],
  providers: [NoticiaDetailResolver, NoticiasService]
})
export class NoticiasModule {}
