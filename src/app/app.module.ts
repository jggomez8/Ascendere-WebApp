import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        }
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
