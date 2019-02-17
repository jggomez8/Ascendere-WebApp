import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent, AnchorComponent } from './components/button/button.component';
import { SectionControlsComponent } from './components/section/section-controls.component';
import { SectionTitleComponent } from './components/section/section-title.component';
import { EncuentroCardComponent } from './components/cards/encuentro-card/encuentro-card.component';
import { NoticiaCardComponent } from './components/cards/noticia-card/noticia-card.component';
import { CursoCardComponent } from './components/cards/curso-card/curso-card.component';
import { SectionComponent } from './components/section/section.component';
import { ProyectosInnovacionCardComponent } from './components/cards/proyectos-innovacion-card/proyectos-innovacion-card.component';

const DECLARATIONS = [
  ContainerComponent,

  // Button Components
  ButtonComponent,
  AnchorComponent,

  // Section Components
  SectionComponent,
  SectionTitleComponent,
  SectionControlsComponent,

  // Cards Components
  EncuentroCardComponent,
  NoticiaCardComponent,
  CursoCardComponent,
  ProyectosInnovacionCardComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule],
  exports: [CommonModule, ...DECLARATIONS]
})
export class SharedModule {}
