import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/interfaces/noticia';
import { UserRoleService } from 'src/app/shared/providers/services/user-role.service';

@Component({
  selector: 'indev-noticias',
  template: `
    <indev-admin-actions>
      <a [routerLink]="['/noticias/create']" mat-menu-item>Crear Noticia</a>
    </indev-admin-actions>
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
  constructor(private _route: ActivatedRoute) {}

  noticias: Noticia[];

  ngOnInit() {
    this.noticias = this._route.snapshot.data['noticias'] as Noticia[];
  }
}
