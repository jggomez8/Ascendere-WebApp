import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/interfaces/noticia';
import { UserRoleService } from 'src/app/shared/providers/services/user-role.service';

@Component({
  selector: 'indev-noticias',
  template: `
    <section indev-section class="container" *ngIf="user">
      <indev-section-title>Funciones Administrador</indev-section-title>
      <indev-section-controls>
        <a [routerLink]="['/noticias/create']" mat-raised-button color="primary">Crear Noticia</a>
      </indev-section-controls>
    </section>

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
  constructor(private _route: ActivatedRoute, public userRole: UserRoleService) {}

  user: boolean;
  noticias: Noticia[];

  ngOnInit() {
    this.noticias = this._route.snapshot.data['noticias'] as Noticia[];

    this.userRole.isAdmin.subscribe(val => (this.user = val));
  }
}
