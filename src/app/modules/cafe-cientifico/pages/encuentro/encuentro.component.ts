import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { UserRoleService } from 'src/app/shared/providers/services/user-role.service';
import { EncuentrosService } from '../../providers/encuentros.service';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'indev-encuentro',
  template: `
    <section indev-section class="container" *ngIf="isAdmin">
      <indev-section-title>Funciones Administrador</indev-section-title>
      <indev-section-controls>
        <a mat-stroked-button color="warn" (click)="delete()">Eliminar Encuentro</a>
        <a mat-stroked-button color="accent">ver Inscritos</a>
        <a
          mat-stroked-button
          color="primary"
          [routerLink]="['/cafe-cientifico/admin/create', encuentro.id]"
        >
          Editar Encuentro
        </a>
      </indev-section-controls>
    </section>

    <indev-header>
      <h1 class="TextTheme--display2">☕ {{ encuentro.name }}</h1>
      <h2>Fecha 📆 {{ encuentro.date | date: 'fullDate' }}</h2>
    </indev-header>

    <section indev-section class="container">
      <router-outlet></router-outlet>
    </section>
  `
})
export class EncuentroComponent implements OnInit, OnDestroy {
  constructor(
    private _route: ActivatedRoute,
    private _userRole: UserRoleService,
    private _encuentrosService: EncuentrosService,
    private _snackBar: MatSnackBar,
    private _location: Location
  ) {}

  encuentro: Encuentro;
  isAdmin: boolean;

  private _popUpSub: Subscription;

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

  delete() {
    const popup = this._snackBar.open(
      `❗Seguro que quieres eliminar el encuentro: ${this.encuentro.name}?`,
      'Confirmar'
    );
    this._popUpSub = popup.onAction().subscribe(async () => {
      await this._encuentrosService.encuentrosCollection.doc(this.encuentro.id).delete();
      this._snackBar.open(`👍 El encuentro fue eliminado correctamente.`);
      this._location.back();
    });
  }

  ngOnDestroy() {
    if (!!this._popUpSub) this._popUpSub.unsubscribe();
  }
}
