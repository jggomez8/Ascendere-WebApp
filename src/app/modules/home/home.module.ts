import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../../shared/shared.module';
import { HomeHeroVideoComponent } from './components/home-hero-video/home-hero-video.component';
import { FeaturesScrollComponent } from './components/features-scroll/features-scroll.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';

@NgModule({
  declarations: [HomeComponent, HomeHeroVideoComponent, FeaturesScrollComponent, FeaturedProjectsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
