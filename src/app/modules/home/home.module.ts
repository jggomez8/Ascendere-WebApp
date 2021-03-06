import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../../shared/shared.module';
import { HomeHeroVideoComponent } from './components/home-hero-video/home-hero-video.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { ObservatorioFeaturesComponent } from './components/observatorio-features/observatorio-features.component';
import { FormacionFeaturesComponent } from './components/formacion-features/formacion-features.component';
import { HomeBlobComponent } from './components/home-blob/home-blob.component';
import { HomeVideoComponent } from './components/home-video/home-video.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroVideoComponent,
    FormacionFeaturesComponent,
    FeaturedProjectsComponent,
    ObservatorioFeaturesComponent,
    HomeBlobComponent,
    HomeVideoComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}
