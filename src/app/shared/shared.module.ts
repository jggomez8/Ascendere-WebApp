import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent, AnchorComponent } from './components/button/button.component';

const DECLARATIONS = [ContainerComponent, ButtonComponent, AnchorComponent];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule],
  exports: [CommonModule, ...DECLARATIONS]
})
export class SharedModule {}
