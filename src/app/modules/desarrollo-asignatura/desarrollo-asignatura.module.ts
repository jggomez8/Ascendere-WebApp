import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesarrolloAsignaturaComponent } from './pages/desarrollo-asignatura/desarrollo-asignatura.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DesarrolloAsignaturaRoutingModule } from './desarrollo-asignatura.routing';

@NgModule({
  declarations: [DesarrolloAsignaturaComponent],
  imports: [CommonModule, SharedModule, DesarrolloAsignaturaRoutingModule]
})
export class DesarrolloAsignaturaModule {}
