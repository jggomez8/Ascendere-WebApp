import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CafeCientificoRoutingModule } from './cafe-cientifico.routing';
import { CafeCientificoComponent } from './pages/cafe-cientifico/cafe-cientifico.component';
import { CarteleraEncuentrosComponent } from './components/cartelera-encuentros/cartelera-encuentros.component';
import { HeroEncuentroComponent } from './components/hero-encuentro/hero-encuentro.component';
import { EncuentroDetailComponent } from './pages/encuentro-detail/encuentro-detail.component';
import { EncuentroResolver } from './resolver/encuentro.resolver';
import { IncripcionEncuentroComponent } from './pages/incripcion-encuentro/incripcion-encuentro.component';

@NgModule({
  declarations: [
    CafeCientificoComponent,
    HeroEncuentroComponent,
    CarteleraEncuentrosComponent,
    EncuentroDetailComponent,
    IncripcionEncuentroComponent
  ],
  imports: [CommonModule, CafeCientificoRoutingModule, SharedModule],
  providers: [EncuentroResolver]
})
export class CafeCientificoModule {}
