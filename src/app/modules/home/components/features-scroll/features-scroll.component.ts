import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cursos } from 'src/app/interfaces/curso';

@Component({
  selector: 'indev-features-scroll',
  templateUrl: './features-scroll.component.html',
  styleUrls: ['./features-scroll.component.scss']
})
export class FeaturesScrollComponent implements OnInit {
  cursos: Cursos;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.cursos = this._route.snapshot.data['cursos'] as Cursos;
  }
}
