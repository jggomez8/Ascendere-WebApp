import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jornada } from 'src/app/interfaces/jornada';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-jornada-detail',
  template: `
    <markdown [data]="jornada.fullContent"></markdown>
  `
})
export class JornadaDetailComponent implements OnInit, OnDestroy {
  constructor(private _route: ActivatedRoute) {}

  jornada: Jornada;
  private _jornadaSub: Subscription;

  ngOnInit() {
    this._jornadaSub = this._route.data.subscribe(data => {
      this.jornada = data['jornada'];
    });
  }

  ngOnDestroy() {
    this._jornadaSub.unsubscribe();
  }
}
