import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsModule } from './modules/ui-components/ui-components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiComponentsModule
  ],
  exports: [
    CommonModule,
    UiComponentsModule
  ],

})
export class SharedModule { }
