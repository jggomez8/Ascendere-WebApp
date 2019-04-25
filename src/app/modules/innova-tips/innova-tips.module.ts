import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InnovaTipsRoutingModule } from './innova-tips.routing';
import { InnovaTipsComponent } from './pages/innova-tips/innova-tips.component';
import { TipComponent } from './pages/tip/tip.component';
import { CreateComponent } from './pages/create/create.component';
import { InnovaTipResolver } from './providers/innova-tip.resolve';

@NgModule({
  declarations: [InnovaTipsComponent, TipComponent, CreateComponent],
  imports: [CommonModule, InnovaTipsRoutingModule, SharedModule],
  providers: [InnovaTipResolver]
})
export class InnovaTipsModule {}
