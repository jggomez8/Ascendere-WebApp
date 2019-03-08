import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { InnovaTipsRoutingModule } from './innova-tips.routing';
import { InnovaTipsComponent } from './pages/innova-tips/innova-tips.component';

@NgModule({
  declarations: [InnovaTipsComponent],
  imports: [CommonModule, InnovaTipsRoutingModule, SharedModule]
})
export class InnovaTipsModule {}
