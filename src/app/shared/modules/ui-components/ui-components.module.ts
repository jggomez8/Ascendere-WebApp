import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, AnchorComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    AnchorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    ButtonComponent,
    AnchorComponent,
  ],
})
export class UiComponentsModule { }
