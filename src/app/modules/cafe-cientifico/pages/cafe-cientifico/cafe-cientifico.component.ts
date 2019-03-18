import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// types
import { Encuentro } from 'src/app/interfaces/encuentro';

@Component({
  selector: 'indev-cafe-cientifico',
  templateUrl: './cafe-cientifico.component.html',
  styleUrls: ['./cafe-cientifico.component.scss']
})
export class CafeCientificoComponent implements OnInit {
  private _encuentros: Encuentro[];
  constructor(private _route: ActivatedRoute) {}

  /**
   * On load page should load all data to show components
   */
  ngOnInit(): void {
    this._encuentros = this._route.snapshot.data['encuentros'] as Encuentro[];
    console.log(this._encuentros);
  }

  get hasActiveEncuentro(): boolean {
    return this._encuentros.length > 0;
  }

  get encuentro(): Encuentro {
    return this._encuentros[0];
  }
}
