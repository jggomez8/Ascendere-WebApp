import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';

@Component({
  selector: 'indev-encuentro',
  template: `
    <indev-header>
      <h1 class="TextTheme--display2">☕ {{ encuentro.name }}</h1>
      <h2>Fecha 📆 {{ encuentro.date | date: 'fullDate' }}</h2>
    </indev-header>

    <section indev-section class="container">
      <router-outlet></router-outlet>
    </section>
  `
})
export class EncuentroComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  public encuentro: Encuentro;

  ngOnInit() {
    this.encuentro = this._route.snapshot.data['encuentro'];
  }
}
