import { NgModule } from '@angular/core';

import { MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';

const MAT_MODULES = [MatIconModule, MatButtonModule, MatProgressBarModule];

@NgModule({
  declarations: [],
  imports: [...MAT_MODULES],
  exports: [...MAT_MODULES]
})
export class AngularMaterialModule {}
