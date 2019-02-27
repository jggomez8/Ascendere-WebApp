import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramaFormacionComponent } from './pages/programa-formacion/programa-formacion.component';
import { ProgramaFormacionRoutingModule } from './programa-formacion.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProgramaFormacionComponent],
  imports: [CommonModule, ProgramaFormacionRoutingModule, SharedModule]
})
export class ProgramaFormacionModule {}
