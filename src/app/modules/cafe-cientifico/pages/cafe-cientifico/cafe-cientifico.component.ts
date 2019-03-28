import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// types
import { Encuentro, Encuentros } from 'src/app/interfaces/encuentro';

@Component({
  selector: 'indev-cafe-cientifico',
  templateUrl: './cafe-cientifico.component.html',
  styleUrls: ['./cafe-cientifico.component.scss']
})
export class CafeCientificoComponent implements OnInit {
  encuentros: Encuentros;

  constructor(private _route: ActivatedRoute) {}

  /**
   * On load page should load all data to show components
   */
  ngOnInit(): void {
    this.encuentros = this._route.snapshot.data['encuentros'] as Encuentros;
  }

  get encuentro(): Encuentro {
    return this.encuentros.primerEncuentro;
  }
}
