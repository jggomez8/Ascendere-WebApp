import { NgModule } from '@angular/core';

import { MatButtonModule, MatIconModule } from '@angular/material';

const MAT_MODULES = [
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [...MAT_MODULES],
  exports: [...MAT_MODULES]
})
export class AngularMaterialModule {}
