import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'indev-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit, OnDestroy {
  constructor(
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _location: Location,
    private _afs: AngularFirestore
  ) {}

  curso: Curso;
  cursos: Curso[];

  private _cursoSub: Subscription;

  ngOnInit() {
    this._cursoSub = this._route.data.subscribe(data => {
      this.curso = data['curso'];
      this.cursos = data['cursos'];
    });
  }

  ngOnDestroy() {
    this._cursoSub.unsubscribe();
  }

  delete() {
    const popup = this._snackBar.open(
      `❗ Seguro que quieres eliminar el curso: ${this.curso.name}?`,
      'Confirmar'
    );
    popup.onAction().subscribe(async () => {
      await this._afs
        .collection('formacion-docente/programa-formacion/cursos')
        .doc(this.curso.id)
        .delete();
      this._snackBar.open(`👍 El curso fue eliminado correctamente.`);
      this._location.back();
    });
  }
}
