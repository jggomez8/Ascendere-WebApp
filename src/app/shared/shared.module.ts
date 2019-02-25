import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material components
import 'hammerjs';

import { AngularMaterialModule } from './modules/angular-material.module';

import { ContainerComponent } from './components/container/container.component';
import { SectionControlsComponent } from './components/section/section-controls.component';
import { SectionTitleComponent } from './components/section/section-title.component';
import { EncuentroCardComponent } from './components/cards/encuentro-card/encuentro-card.component';
import { NoticiaCardComponent } from './components/cards/noticia-card/noticia-card.component';
import { CursoCardComponent } from './components/cards/curso-card/curso-card.component';
import { SectionComponent } from './components/section/section.component';
import { ProyectosInnovacionCardComponent } from './components/cards/proyectos-innovacion-card/proyectos-innovacion-card.component';
import { LazyTransitionComponent, LazyLoadImage } from './components/lazy-load/lazy-load.component';
import { MarkdownModule } from 'ngx-markdown';
import { NavbarComponent } from './components/navbar/navbar.component';

const DECLARATIONS = [
  // Container component
  ContainerComponent,

  // Section Components
  SectionComponent,
  SectionTitleComponent,
  SectionControlsComponent,

  // Cards Components
  EncuentroCardComponent,
  NoticiaCardComponent,
  CursoCardComponent,
  ProyectosInnovacionCardComponent,

  // lazy load component
  LazyTransitionComponent,
  LazyLoadImage,

  // Navbar
  NavbarComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, MarkdownModule.forChild(), AngularMaterialModule],
  exports: [CommonModule, MarkdownModule, ...DECLARATIONS, AngularMaterialModule]
})
export class SharedModule {}
