import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebateEstudiantilComponent } from './pages/debate-estudiantil/debate-estudiantil.component';
import { DebateEstudiantilRoutingModule } from './debate-estudiantil.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DebateEstudiantilComponent],
  imports: [CommonModule, DebateEstudiantilRoutingModule, SharedModule]
})
export class DebateEstudiantilModule {}
