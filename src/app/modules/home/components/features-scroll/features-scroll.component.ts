import { Component, OnInit, OnDestroy } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'indev-features-scroll',
  templateUrl: './features-scroll.component.html',
  styleUrls: ['./features-scroll.component.scss']
})
export class FeaturesScrollComponent implements OnInit, OnDestroy {
  cursos: Curso[];

  private _cursosSub: Subscription;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._cursosSub = this._route.data.subscribe(
      data => {
        this.cursos = data['cursos'] as Curso[];
      },
      err => console.error('TODO: do something')
    );
  }

  ngOnDestroy() {
    this._cursosSub.unsubscribe();
  }

  get hasCursos(): boolean {
    return this.cursos && this.cursos.length > 0;
  }
}
