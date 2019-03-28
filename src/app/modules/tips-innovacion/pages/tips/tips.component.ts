import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tip } from 'src/app/interfaces/tip';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit, OnDestroy {
  _tipTypes: Object = {
    'aula-divertida': 'Aula Divertida',
    'docentes-futuro': 'Docentes del Futuro',
    videos: 'Videos'
  };

  tips: Tip[];

  tipsType: string;
  rawType: string;

  private _tipsSub: Subscription;
  private _tipsTypeSub: Subscription;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._tipsSub = this._route.data.subscribe(
      data => {
        // TODO: add empty case
        this.tips = data['tips'];
      },
      err => console.error('TODO: do something')
    );

    this._tipsTypeSub = this._route.params.subscribe(params => {
      this.tipsType = this._tipTypes[params.id];
      this.rawType = params.id;
    });
  }

  ngOnDestroy() {
    this._tipsSub.unsubscribe();
    this._tipsTypeSub.unsubscribe();
  }

  get hasTips() {
    return this.tips && this.tips.length > 0;
  }
}
