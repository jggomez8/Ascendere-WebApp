import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent, AnchorComponent } from './components/button/button.component';
import { SectionHeaderComponent } from './components/section/section-header.component';
import { SectionControlsComponent } from './components/section/section-controls.component';
import { SectionTitleComponent } from './components/section/section-title.component';

const DECLARATIONS = [
  ContainerComponent,
  ButtonComponent,
  AnchorComponent,
  SectionHeaderComponent,
  SectionTitleComponent,
  SectionControlsComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule],
  exports: [CommonModule, ...DECLARATIONS]
})
export class SharedModule {}
