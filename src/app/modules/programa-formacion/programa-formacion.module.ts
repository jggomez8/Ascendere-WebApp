import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from 'src/app/shared/shared.module';

// providers
import { ProgramaFormacionService } from './providers/programa-formacion.service';
import { CursosResolver } from './providers/cursos.resolver';

// declarations
import { ProgramaFormacionComponent } from './pages/programa-formacion/programa-formacion.component';
import { ProgramaFormacionRoutingModule } from './programa-formacion.routing';

@NgModule({
  declarations: [ProgramaFormacionComponent],
  imports: [CommonModule, ProgramaFormacionRoutingModule, SharedModule],
  providers: [ProgramaFormacionService, CursosResolver]
})
export class ProgramaFormacionModule {}
