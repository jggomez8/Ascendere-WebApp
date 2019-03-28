import { Component, OnInit, OnDestroy } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'indev-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.scss']
})
export class NoticiaDetailComponent implements OnInit, OnDestroy {
  noticia: Noticia;

  private _noticiaSub: Subscription;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._noticiaSub = this._route.data.subscribe(
      data => {
        this.noticia = data['noticia'] as Noticia;
      },
      err => console.error('TODO: do something')
    );
  }

  ngOnDestroy() {
    this._noticiaSub.unsubscribe();
  }
}
