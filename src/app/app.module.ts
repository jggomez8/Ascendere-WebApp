import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

// decarations
import { AppComponent } from './app.component';

// modules
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

// functions
import { indevMarkedOptionsFactory } from './shared/functions/markdown/markdown.functions';

// Configuration
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: indevMarkedOptionsFactory
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
