import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { InnovaTipsRoutingModule } from './innova-tips.routing';

//declarations
import { InnovaTipsComponent } from './pages/innova-tips/innova-tips.component';

// providers
import { InnovaTipsResolver } from './providers/innova-tips.resolver';

@NgModule({
  declarations: [InnovaTipsComponent],
  imports: [CommonModule, InnovaTipsRoutingModule, SharedModule],
  providers: [InnovaTipsResolver]
})
export class InnovaTipsModule {}
