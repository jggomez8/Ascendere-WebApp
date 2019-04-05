import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule,
  MatInputModule,
  MatFormFieldModule,
  MatChipsModule,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatTabsModule,
  MatSelectModule,
  MatSliderModule
} from '@angular/material';

const MAT_MODULES = [
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatInputModule,
  MatFormFieldModule,
  MatChipsModule,
  MatSnackBarModule,
  MatTabsModule,
  MatSelectModule,
  MatSliderModule
];

@NgModule({
  declarations: [],
  imports: [...MAT_MODULES],
  exports: [...MAT_MODULES],
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 4500 } }]
})
export class AngularMaterialModule {}
