import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';

@Component({
  selector: 'indev-cafe-cientifico',
  template: `
    <indev-admin-actions>
      <a [routerLink]="['/cafe-cientifico/admin/create']" mat-menu-item>Crear Encuentro</a>
    </indev-admin-actions>

    <indev-header>
      <h2>Encuentro</h2>
      <h1>Café Científico</h1>
      <img src="/assets/images/CafeCientifico.svg" alt="CafeCientifico Icon" />
      <markdown src="/assets/markdown/cafe-cientifico/cafe-cientifico.md"> </markdown>
    </indev-header>
    <indev-hero-encuentro [encuentro]="encuentro" *ngIf="encuentros.length > 0">
    </indev-hero-encuentro>

    <indev-cartelera-encuentros [encuentros]="encuentros"></indev-cartelera-encuentros>
  `
})
export class CafeCientificoComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  encuentros: Encuentro[];

  /**
   * On load page should load all data to show components, also should detect weather
   * this user is admin or normal user to display admin module
   */
  ngOnInit(): void {
    this.encuentros = this._route.snapshot.data['encuentros'] as Encuentro[];
  }

  get encuentro(): Encuentro {
    return this.encuentros[0];
  }
}
