import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesarrolloAsignaturaComponent } from './pages/desarrollo-asignatura/desarrollo-asignatura.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DesarrolloAsignaturaRoutingModule } from './desarrollo-asignatura.routing';
import { FaqCardComponent } from './components/faq-card/faq-card.component';

@NgModule({
  declarations: [DesarrolloAsignaturaComponent, FaqCardComponent],
  imports: [CommonModule, SharedModule, DesarrolloAsignaturaRoutingModule]
})
export class DesarrolloAsignaturaModule {}
