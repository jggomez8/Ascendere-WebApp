import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';

// material components
// TODO: import in correct file
import 'hammerjs';

import { AngularMaterialModule } from './modules/angular-material.module';

import { SectionControlsComponent } from './components/section/section-controls.component';
import { SectionTitleComponent } from './components/section/section-title.component';
import { EncuentroCardComponent } from './components/cards/encuentro-card/encuentro-card.component';
import { NoticiaCardComponent } from './components/cards/noticia-card/noticia-card.component';
import { CursoCardComponent } from './components/cards/curso-card/curso-card.component';
import { SectionComponent } from './components/section/section.component';
import { LazyTransitionComponent, LazyLoadImage } from './components/lazy-load/lazy-load.component';
import { MarkdownModule } from 'ngx-markdown';
import { LazyLoadImageComponent } from './components/lazy-load-image/lazy-load-image.component';
import { HeaderComponent } from './components/header/header.component';
import { GoTopFabComponent } from './components/fab/go-top-fab/go-top-fab.component';
import { ReturnFabComponent } from './components/fab/return-fab/return-fab.component';
import { FirebaseModule } from './modules/firebase.module';
import { AuthService } from './services/auth.service';
import { ProyectoCardComponent } from './components/cards/proyecto-card/proyecto-card.component';

// importar locales
// TODO: create module for locate
import localeEsAr from '@angular/common/locales/es-AR';
import { SafePipe } from './pipes/safe.pipe';
import { InnovaTipCardComponent } from './components/cards/innova-tip-card/innova-tip-card.component';

import { CursosResolver } from './providers/cursos.resolver';
import { EncuentrosResolver } from './providers/encuentros.resolver';
import { NoticiasResolver } from './providers/noticias.resolver';
import { TipsResolver } from './providers/tips.resolver';
import { InnovaTipsResolver } from './providers/innova-tips.resolver';
import { ProyectosInnovacionResolver } from './providers/proyectos.resolver';
import { TipCardComponent } from './components/tip-card/tip-card.component';
import { ReactiveFormsModule } from '@angular/forms';

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localeEsAr, 'es-Ar');

const DECLARATIONS = [
  // Header Component
  HeaderComponent,

  // Section Components
  SectionComponent,
  SectionTitleComponent,
  SectionControlsComponent,

  // Cards Components
  EncuentroCardComponent,
  NoticiaCardComponent,
  CursoCardComponent,
  ProyectoCardComponent,
  InnovaTipCardComponent,
  TipCardComponent,

  // lazy load Component
  LazyTransitionComponent,
  LazyLoadImage,
  LazyLoadImageComponent,

  // Fab Component
  GoTopFabComponent,
  ReturnFabComponent,

  // pipe
  SafePipe
];

const RESOLVERS = [
  CursosResolver,
  EncuentrosResolver,
  NoticiasResolver,
  TipsResolver,
  InnovaTipsResolver,
  ProyectosInnovacionResolver
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forChild(),
    AngularMaterialModule,
    FirebaseModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MarkdownModule,
    ...DECLARATIONS,
    AngularMaterialModule,
    FirebaseModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService, { provide: LOCALE_ID, useValue: 'es-Ar' }, ...RESOLVERS]
    };
  }
}
