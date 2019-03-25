import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/interfaces/articulo';

@Component({
  selector: 'indev-articulo',
  template: `
    <indev-header>
      <h1 class="TextTheme--display2">
        {{ articulo.name }}
      </h1>
    </indev-header>
    <div class="container">
      <markdown *ngIf="articulo.hasContent; else source" [data]="articulo.content"></markdown>
      <ng-template #source>
        <markdown [src]="articulo.source"></markdown>
      </ng-template>
    </div>
  `,
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit, OnDestroy {
  private _sub: Subscription;
  articulo: Articulo;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._sub = this._route.data.subscribe(data => {
      this.articulo = data['articulo'];
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
