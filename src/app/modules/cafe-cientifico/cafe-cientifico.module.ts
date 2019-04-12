import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CafeCientificoRoutingModule } from './cafe-cientifico.routing';
import { CafeCientificoComponent } from './pages/cafe-cientifico/cafe-cientifico.component';
import { CarteleraEncuentrosComponent } from './components/cartelera-encuentros/cartelera-encuentros.component';
import { HeroEncuentroComponent } from './components/hero-encuentro/hero-encuentro.component';
import { EncuentroDetailComponent } from './pages/encuentro-detail/encuentro-detail.component';
import { IncripcionEncuentroComponent } from './pages/incripcion-encuentro/incripcion-encuentro.component';
import { EncuentroComponent } from './pages/encuentro/encuentro.component';
import { CafeCientificoAdminComponent } from './pages/cafe-cientifico-admin/cafe-cientifico-admin.component';
import { CreateEncuentroComponent } from './pages/create-encuentro/create-encuentro.component';
import { EncuentroResolver } from './providers/encuentro.resolver';
import { EncuentrosService } from './providers/encuentros.service';

@NgModule({
  declarations: [
    CafeCientificoComponent,
    HeroEncuentroComponent,
    CarteleraEncuentrosComponent,
    EncuentroDetailComponent,
    IncripcionEncuentroComponent,
    EncuentroComponent,
    CafeCientificoAdminComponent,
    CreateEncuentroComponent
  ],
  imports: [CommonModule, CafeCientificoRoutingModule, SharedModule],
  providers: [EncuentroResolver, EncuentrosService]
})
export class CafeCientificoModule {}
