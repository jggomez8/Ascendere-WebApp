import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeCientificoRoutingModule } from './cafe-cientifico.routing';
import { CafeCientificoComponent } from './pages/cafe-cientifico/cafe-cientifico.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroEncuentroComponent } from './components/hero-encuentro/hero-encuentro.component';

@NgModule({
  declarations: [CafeCientificoComponent, HeroEncuentroComponent],
  imports: [
    CommonModule,
    CafeCientificoRoutingModule,
    SharedModule
  ]
})
export class CafeCientificoModule { }
