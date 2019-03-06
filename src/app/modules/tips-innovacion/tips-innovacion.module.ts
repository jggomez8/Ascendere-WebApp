import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsInnovacionRoutingModule } from './tips-innovacion.routing';
import { TipsInnovacionComponent } from './pages/tips-innovacion/tips-innovacion.component';
import { TipSectionComponent } from './components/tip-section/tip-section.component';
import { TipsComponent } from './pages/tips/tips.component';

@NgModule({
  declarations: [TipsInnovacionComponent, TipSectionComponent, TipsComponent],
  imports: [
    CommonModule,
    TipsInnovacionRoutingModule
  ]
})
export class TipsInnovacionModule { }
