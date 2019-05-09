import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Curso } from 'src/app/interfaces/curso';
import { ProgramaFormacionComponent } from '../../modules/programa-formacion/pages/programa-formacion/programa-formacion.component';
import { HomeComponent } from '../../modules/home/pages/home/home.component';
import { PortfolioCursosComponent } from 'src/app/modules/programa-formacion/pages/portfolio-cursos/portfolio-cursos.component';
import { CursoComponent } from 'src/app/modules/programa-formacion/pages/curso/curso.component';

@Injectable()
export class CursosResolver implements Resolve<Curso[]> {
  constructor(private _afs: AngularFirestore) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const cursosSnap = await this._getCursosCollection(route)
        .get()
        .toPromise();

      return cursosSnap.docs.map(doc => new Curso(Object.assign({ id: doc.id }, doc.data())));
    } catch (error) {
      return [];
    }
  }

  private _getCursosCollection(route: ActivatedRouteSnapshot): AngularFirestoreCollection<Curso[]> {
    const component = route.component;
    const programaFormacionDoc = this._afs
      .collection('formacion-docente')
      .doc('programa-formacion');

    // If data is requested by the `home` or `programa-formacion home` return the future courses
    if (
      component === ProgramaFormacionComponent ||
      component === HomeComponent ||
      component === CursoComponent
    ) {
      const temp = new Date();
      const startDate = new Date(temp.getFullYear(), temp.getMonth());
      return programaFormacionDoc.collection('cursos', ref =>
        ref.where('date', '>=', startDate).orderBy('date', 'asc')
      );
    }

    // Check if component is portfolio type, if so use queries in the route
    if (component === PortfolioCursosComponent) {
      // TODO: add pagination
      return programaFormacionDoc.collection('cursos', ref => ref.orderBy('date', 'desc'));
    }

    return null;
  }
}
