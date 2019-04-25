import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InnovaTip } from 'src/app/interfaces/innova-tip';

@Component({
  selector: 'indev-innova-tips',
  template: `
    <indev-admin-actions>
      <a [routerLink]="['/innova-tips/admin/create']" mat-menu-item>Añadir InnovaTip</a>
    </indev-admin-actions>

    <indev-header>
      <h1 class="TextTheme--display2">
        <span class="TextTheme--display3">InnovaTips</span>
      </h1>
      <img src="/assets/images/ProgramaFormacion.svg" alt="ProgramaFormacion Icon" />
      <markdown src="/assets/markdown/innova-tips/innova-tips.md"> </markdown>
    </indev-header>

    <section indev-section class="container">
      <indev-section-title>
        Portafolio de InnovaTips
      </indev-section-title>

      <div class="grid" style="--size: 350px" *ngIf="innovaTips.length > 0; emptyMessage">
        <indev-innova-tip-card
          *ngFor="let innovaTip of innovaTips"
          [innovaTip]="innovaTip"
        ></indev-innova-tip-card>
      </div>

      <ng-template #emptyMessage>
        <span class="TextTheme--headline">
          ❗ No se encontraron tips para mostrar
        </span>
      </ng-template>
    </section>
  `
})
export class InnovaTipsComponent implements OnInit {
  public innovaTips: InnovaTip[];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.innovaTips = this._route.snapshot.data['innovaTips'] as InnovaTip[];
  }
}
