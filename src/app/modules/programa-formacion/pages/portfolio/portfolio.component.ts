import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';
import { Subscription } from 'rxjs';

@Component({
  selector: 'indev-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
// TODO: rename component to PortafolioCursos
export class PortfolioComponent implements OnInit, OnDestroy {
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
