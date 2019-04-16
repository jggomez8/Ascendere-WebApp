import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgramaFormacionComponent } from './pages/programa-formacion/programa-formacion.component';
import { ProgramaFormacionRoutingModule } from './programa-formacion.routing';
import { CursoComponent } from './pages/curso/curso.component';
import { CursoResolver } from './providers/curso.resolver';
import { PortfolioCursosComponent } from './pages/portfolio-cursos/portfolio-cursos.component';
import { ProgramaFormacionAdminComponent } from './pages/programa-formacion-admin/programa-formacion-admin.component';
import { CreateCursoComponent } from './pages/create-curso/create-curso.component';
import { CreateBannerComponent } from './pages/create-banner/create-banner.component';
import { BannerTypeResolver } from './providers/bannerType.resolver';

@NgModule({
  declarations: [
    ProgramaFormacionComponent,
    PortfolioCursosComponent,
    CursoComponent,
    ProgramaFormacionAdminComponent,
    CreateCursoComponent,
    CreateBannerComponent
  ],
  imports: [CommonModule, ProgramaFormacionRoutingModule, SharedModule],
  providers: [CursoResolver, BannerTypeResolver]
})
export class ProgramaFormacionModule {}
