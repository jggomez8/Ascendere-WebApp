import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InnovaTip } from 'src/app/interfaces/innova-tip';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-tip',
  template: `
    <indev-admin-actions>
      <a [routerLink]="['/innova-tips/admin/create']" mat-menu-item>Añadir InnovaTip</a>
      <mat-divider></mat-divider>
      <a mat-menu-item (click)="delete()">Eliminar InnovaTip</a>
    </indev-admin-actions>

    <section indev-section class="container">
      <indev-section-title>
        {{ innovaTip.name }}
      </indev-section-title>
      <indev-section-controls>
        <a
          mat-button
          color="primary"
          [href]="innovaTip.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en YouTube
        </a>
      </indev-section-controls>
      <markdown [data]="innovaTip.markdown"> </markdown>
    </section>

    <section class="container" indev-section *ngIf="innovaTips.length > 0">
      <indev-section-title>Otros InnovaTips</indev-section-title>
      <indev-section-controls>
        <a mat-button color="primary" [routerLink]="['/innova-tips']">Ver más InnovaTips</a>
      </indev-section-controls>
      <div class="grid" style="--size: 400px">
        <indev-innova-tip-card
          *ngFor="let innovaTip of innovaTips"
          [innovaTip]="innovaTip"
        ></indev-innova-tip-card>
      </div>
    </section>
  `
})
export class TipComponent implements OnInit, OnDestroy {
  constructor(
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _location: Location,
    private _afs: AngularFirestore
  ) {}

  innovaTip: InnovaTip;
  innovaTips: InnovaTip[];

  private _sub: Subscription;

  ngOnInit() {
    this._sub = this._route.data.subscribe(data => {
      this.innovaTip = data['innovaTip'];
      this.innovaTips = data['innovaTips'];
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  delete() {
    const popup = this._snackBar.open(
      `❗ Seguro que quieres eliminar el InnovaTip: ${this.innovaTip.name}?`,
      'Confirmar'
    );
    popup.onAction().subscribe(async () => {
      await this._afs
        .collection('formacion-docente/programa-formacion/tips')
        .doc(this.innovaTip.id)
        .delete();
      this._snackBar.open(`👍 El InnovaTip fue eliminado correctamente.`);
      this._location.back();
    });
  }
}
