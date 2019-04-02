import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';

@Component({
  selector: 'indev-cafe-cientifico',
  templateUrl: './cafe-cientifico.component.html',
  styleUrls: ['./cafe-cientifico.component.scss']
})
export class CafeCientificoComponent implements OnInit {
  encuentros: Encuentro[];

  constructor(private _route: ActivatedRoute) {}

  /**
   * On load page should load all data to show components
   */
  ngOnInit(): void {
    this.encuentros = this._route.snapshot.data['encuentros'] as Encuentro[];
  }

  get encuentro(): Encuentro {
    return this.encuentros[0];
  }
}
