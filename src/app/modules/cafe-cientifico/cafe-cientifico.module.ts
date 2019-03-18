import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { CafeCientificoRoutingModule } from './cafe-cientifico.routing';

// declarions
import { CafeCientificoComponent } from './pages/cafe-cientifico/cafe-cientifico.component';
import { CarteleraEncuentrosComponent } from './components/cartelera-encuentros/cartelera-encuentros.component';
import { HeroEncuentroComponent } from './components/hero-encuentro/hero-encuentro.component';

// providers
import { CafeCientificoService } from './cafe-cientifico.service';
import { EncuentrosResolver } from './resolver/encuentros.resolver';

@NgModule({
  declarations: [CafeCientificoComponent, HeroEncuentroComponent, CarteleraEncuentrosComponent],
  imports: [CommonModule, CafeCientificoRoutingModule, SharedModule],
  providers: [CafeCientificoService, EncuentrosResolver]
})
export class CafeCientificoModule {}
