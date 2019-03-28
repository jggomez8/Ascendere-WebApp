import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cursos } from 'src/app/interfaces/curso';

@Component({
  selector: 'indev-programa-formacion',
  templateUrl: './programa-formacion.component.html',
  styleUrls: ['./programa-formacion.component.scss']
})
export class ProgramaFormacionComponent implements OnInit {
  public cursos: Cursos;

  constructor(private _route: ActivatedRoute) {}

  /**
   * On load page should load all data to show components
   */
  ngOnInit(): void {
    this.cursos = this._route.snapshot.data['cursos'] as Cursos;
  }
}
