import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'indev-programa-formacion',
  templateUrl: './programa-formacion.component.html'
})
export class ProgramaFormacionComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  public cursos: Curso[];

  ngOnInit(): void {
    this.cursos = this._route.snapshot.data['cursos'] as Curso[];
  }
}
