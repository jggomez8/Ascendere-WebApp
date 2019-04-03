import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/interfaces/noticia';
import { Tip } from 'src/app/interfaces/tip';

@Component({
  selector: 'indev-observatorio-features',
  templateUrl: './observatorio-features.component.html',
  styleUrls: ['./observatorio-features.component.scss']
})
export class ObservatorioFeaturesComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  noticias: Noticia[];
  tips: Tip[];

  ngOnInit() {
    const data = this._route.snapshot.data;
    this.noticias = data['noticias'] as Noticia[];
    this.tips = data['tips'] as Tip[];
  }
}
