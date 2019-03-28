import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit, OnDestroy {
  curso: Curso;

  private _cursoSub: Subscription;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._cursoSub = this._route.data.subscribe(
      data => {
        this.curso = data['curso'] as Curso;
      },
      err => console.error('TODO: do something')
    );
  }

  ngOnDestroy() {
    this._cursoSub.unsubscribe();
  }
}
