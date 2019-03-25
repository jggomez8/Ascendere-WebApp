import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/interfaces/noticia';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit, OnDestroy {
  noticias: Noticia[];

  private _noticiasSub: Subscription;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._noticiasSub = this._route.data.subscribe(
      data => {
        this.noticias = data['noticias'] as Noticia[];
      },
      err => console.error('TODO: do something')
    );
  }

  ngOnDestroy(): void {
    this._noticiasSub.unsubscribe();
  }

  get hasNoticias() {
    return this.noticias && this.noticias.length > 0;
  }
}
