import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalleresAcademicosComponent } from './pages/talleres-academicos/talleres-academicos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TalleresAcademicosRoutingModule } from './talleres-academicos.routing';

@NgModule({
  declarations: [TalleresAcademicosComponent],
  imports: [
    CommonModule,
    TalleresAcademicosRoutingModule,
    SharedModule
  ]
})
export class TalleresAcademicosModule { }
