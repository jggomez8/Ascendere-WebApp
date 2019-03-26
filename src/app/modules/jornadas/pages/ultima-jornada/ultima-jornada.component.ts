import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jornada } from 'src/app/interfaces/jornada';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-ultima-jornada',
  templateUrl: './ultima-jornada.component.html',
  styleUrls: ['./ultima-jornada.component.scss']
})
export class UltimaJornadaComponent implements OnInit, OnDestroy {
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
