import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tip } from 'src/app/interfaces/tip';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-tips',
  template: `
    <indev-header *ngIf="tipsType">
      <h1 [ngClass]="['TextTheme--display2']">
        {{ tipsType }}
      </h1>
    </indev-header>

    <section indev-section class="container">
      <div class="grid" *ngIf="tips.length > 0; else emptyMessage" style="--size: 340px">
        <indev-tip-card [tip]="tip" *ngFor="let tip of tips"></indev-tip-card>
      </div>
      <ng-template #emptyMessage>
        <span class="TextTheme--headline">
          ❗ No hay Tips para mostrar.
        </span>
      </ng-template>
    </section>
  `
})
export class TipsComponent implements OnInit, OnDestroy {
  _tipTypes: Object = {
    'aula-divertida': '🎉 Aula Divertida',
    'docentes-futuro': '🔮 Docentes del Futuro',
    videos: '🎥 Videos'
  };

  tips: Tip[];

  tipsType: string;

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
    });
  }

  ngOnDestroy() {
    this._tipsSub.unsubscribe();
    this._tipsTypeSub.unsubscribe();
  }
}
