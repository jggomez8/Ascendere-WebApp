import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { UserRoleService } from 'src/app/shared/providers/services/user-role.service';

@Component({
  selector: 'indev-encuentro',
  template: `
    <indev-header>
      <h1 class="TextTheme--display2">☕ {{ encuentro.name }}</h1>
      <h2>Fecha 📆 {{ encuentro.date | date: 'fullDate' }}</h2>
    </indev-header>

    <section indev-section class="container" *ngIf="isAdmin">
      <indev-section-title>Modulo Admin</indev-section-title>
      <indev-section-controls>
        <a mat-button>Inscritos</a>
        <a mat-button color="warn">Eliminar Encuentro</a>
        <a
          mat-button
          color="primary"
          [routerLink]="['/cafe-cientifico/admin/create', encuentro.id]"
        >
          Editar Encuentro
        </a>
      </indev-section-controls>
    </section>

    <section indev-section class="container">
      <router-outlet></router-outlet>
    </section>
  `
})
export class EncuentroComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _userRole: UserRoleService) {}

  encuentro: Encuentro;
  isAdmin: boolean;

  /**
   * Get this encuentro data, and verify if this user is an Admin, in order to
   * edit the data
   */
  ngOnInit() {
    this.encuentro = this._route.snapshot.data['encuentro'];

    this._userRole.isAdmin.subscribe(val => {
      this.isAdmin = val;
    });
  }
}
