import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-encuentro-detail',
  templateUrl: './encuentro-detail.component.html',
  styleUrls: ['./encuentro-detail.component.scss']
})
export class EncuentroDetailComponent implements OnInit, OnDestroy {
  encuentro: Encuentro;
  private _encuentroSub: Subscription;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._encuentroSub = this._route.data.subscribe(
      data => {
        this.encuentro = data['encuentro'] as Encuentro;
      },
      err => console.error('TODO: do something')
    );
  }

  ngOnDestroy() {
    this._encuentroSub.unsubscribe();
  }
}
