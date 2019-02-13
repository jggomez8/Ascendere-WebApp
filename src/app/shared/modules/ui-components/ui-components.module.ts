import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    ButtonComponent,
  ],
})
export class UiComponentsModule { }
