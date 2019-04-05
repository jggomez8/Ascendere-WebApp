import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jornada } from 'src/app/interfaces/jornada';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-jornada-actual',
  templateUrl: './jornada-actual.component.html',
  styleUrls: ['./jornada-actual.component.scss']
})
export class JornadaActualComponent implements OnInit, OnDestroy {
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
