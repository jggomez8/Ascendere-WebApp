import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsInnovacionRoutingModule } from './tips-innovacion.routing';
import { TipsInnovacionComponent } from './pages/tips-innovacion/tips-innovacion.component';
import { TipSectionComponent } from './components/tip-section/tip-section.component';
import { TipsComponent } from './pages/tips/tips.component';
import { TipsResolver } from './providers/tips.resolver';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TipsInnovacionComponent, TipSectionComponent, TipsComponent],
  imports: [CommonModule, TipsInnovacionRoutingModule, SharedModule],
  providers: [TipsResolver]
})
export class TipsInnovacionModule {}
