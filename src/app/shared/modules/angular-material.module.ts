import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule,
  MatInputModule,
  MatFormFieldModule,
  MatChipsModule
} from '@angular/material';

const MAT_MODULES = [
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatInputModule,
  MatFormFieldModule,
  MatChipsModule
];

@NgModule({
  declarations: [],
  imports: [...MAT_MODULES],
  exports: [...MAT_MODULES]
})
export class AngularMaterialModule {}
