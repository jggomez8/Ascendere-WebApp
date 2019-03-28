import { Component, OnInit, OnDestroy } from '@angular/core';
import { Jornada } from 'src/app/interfaces/jornada';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'indev-portafolio-jornadas',
  templateUrl: './portafolio-jornadas.component.html',
  styleUrls: ['./portafolio-jornadas.component.scss']
})
export class PortafolioJornadasComponent implements OnInit, OnDestroy {
  constructor(private _route: ActivatedRoute) {}

  jornadas: Jornada[];

  private _jornadasSub: Subscription;
  ngOnInit() {
    this._jornadasSub = this._route.data.subscribe(
      data => {
        this.jornadas = data['jornadas'];
      },
      err => console.error('TODO: do something')
    );
  }

  ngOnDestroy() {
    this._jornadasSub.unsubscribe();
  }
}
