import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/interfaces/noticia';

@Component({
  selector: 'indev-noticias',
  template: `
    <indev-header>
      <h1 class="TextTheme--display2">
        Noticias
      </h1>
    </indev-header>

    <section indev-section class="container">
      <div class="grid" *ngIf="noticias.length > 0; else emptyMessage">
        <indev-noticia-card *ngFor="let noticia of noticias" [noticia]="noticia">
        </indev-noticia-card>
      </div>
      <ng-template #emptyMessage>
        <span class="TextTheme--headline">
          ❗ No se encontraron noticias
        </span>
      </ng-template>
    </section>
  `
})
export class NoticiasComponent implements OnInit {
  noticias: Noticia[];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.noticias = this._route.snapshot.data['noticias'] as Noticia[];
  }
}
