import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material components
import 'hammerjs';

import { AngularMaterialModule } from './modules/angular-material.module';

import { SectionControlsComponent } from './components/section/section-controls.component';
import { SectionTitleComponent } from './components/section/section-title.component';
import { EncuentroCardComponent } from './components/cards/encuentro-card/encuentro-card.component';
import { NoticiaCardComponent } from './components/cards/noticia-card/noticia-card.component';
import { CursoCardComponent } from './components/cards/curso-card/curso-card.component';
import { SectionComponent } from './components/section/section.component';
import { ProyectosInnovacionCardComponent } from './components/cards/proyectos-innovacion-card/proyectos-innovacion-card.component';
import { LazyTransitionComponent, LazyLoadImage } from './components/lazy-load/lazy-load.component';
import { MarkdownModule } from 'ngx-markdown';
import { LazyLoadImageComponent } from './components/lazy-load-image/lazy-load-image.component';
import { HeaderComponent } from './components/header/header.component';

const DECLARATIONS = [
  // Header Component
  HeaderComponent,

  // Section Components
  SectionComponent,
  SectionTitleComponent,
  SectionControlsComponent,

  // Cards Components
  EncuentroCardComponent,
  NoticiaCardComponent,
  CursoCardComponent,
  ProyectosInnovacionCardComponent,

  // lazy load Component
  LazyTransitionComponent,
  LazyLoadImage,
  LazyLoadImageComponent

];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, MarkdownModule.forChild(), AngularMaterialModule],
  exports: [CommonModule, MarkdownModule, ...DECLARATIONS, AngularMaterialModule]
})
export class SharedModule {}
