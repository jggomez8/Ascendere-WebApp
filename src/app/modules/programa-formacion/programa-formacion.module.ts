import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramaFormacionComponent } from './pages/programa-formacion/programa-formacion.component';
import { ProgramaFormacionRoutingModule } from './programa-formacion.routing';

@NgModule({
  declarations: [ProgramaFormacionComponent],
  imports: [
    CommonModule,
    ProgramaFormacionRoutingModule
  ]
})
export class ProgramaFormacionModule { }
