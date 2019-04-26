import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { ArticuloRoutingModule } from './articulo.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticuloResolver } from './providers/articulo.resolver';
import { CreateArticuloComponent } from './pages/create-articulo/create-articulo.component';

@NgModule({
  declarations: [ArticuloComponent, CreateArticuloComponent],
  imports: [CommonModule, ArticuloRoutingModule, SharedModule],
  providers: [ArticuloResolver]
})
export class ArticuloModule {}
