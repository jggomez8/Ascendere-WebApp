import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent, AnchorComponent } from './components/button/button.component';
import { SectionHeaderComponent } from './components/section/section-header.component';
import { SectionControlsComponent } from './components/section/section-controls.component';
import { SectionTitleComponent } from './components/section/section-title.component';
import { EncuentroCardComponent } from './components/cards/encuentro-card/encuentro-card.component';
import { NoticiaCardComponent } from './components/cards/noticia-card/noticia-card.component';

const DECLARATIONS = [
  ContainerComponent,

  // Button Components
  ButtonComponent,
  AnchorComponent,

  // Section Components
  SectionHeaderComponent,
  SectionTitleComponent,
  SectionControlsComponent,

  // Cards Components
  EncuentroCardComponent,
  NoticiaCardComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule],
  exports: [CommonModule, ...DECLARATIONS]
})
export class SharedModule {}
