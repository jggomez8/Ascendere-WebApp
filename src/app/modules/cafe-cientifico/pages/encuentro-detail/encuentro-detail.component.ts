import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';

@Component({
  selector: 'indev-encuentro-detail',
  templateUrl: './encuentro-detail.component.html',
  styleUrls: ['./encuentro-detail.component.scss']
})
export class EncuentroDetailComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  encuentro: Encuentro;

  ngOnInit() {
    console.log(this._route.snapshot.data);

    this.encuentro = this._route.snapshot.data['encuentro'];
  }
}
