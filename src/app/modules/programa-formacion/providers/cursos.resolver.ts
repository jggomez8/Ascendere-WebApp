import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Curso } from 'src/app/interfaces/curso';
import { ProgramaFormacionComponent } from '../pages/programa-formacion/programa-formacion.component';
import { HomeComponent } from '../../home/pages/home/home.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';

@Injectable()
export class CursosResolver implements Resolve<Curso[]> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const cursosSnap = await this._getCursosCollection(route)
        .get()
        .toPromise();

      if (cursosSnap.empty) return [];
      return cursosSnap.docs.map(doc => new Curso(Object.assign({ id: doc.id }, doc.data())));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }

  private _getCursosCollection(route: ActivatedRouteSnapshot): AngularFirestoreCollection<Curso[]> {
    const component = route.component;
    const programaFormacionDocument: AngularFirestoreDocument = this._afs
      .collection('formacion-docente')
      .doc('programa-formacion');

    // If data is requested by the `home` or `programa-formacion home` return the future courses
    // TODO: get ongoing courses
    if (component === ProgramaFormacionComponent || component === HomeComponent) {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 1);
      return programaFormacionDocument.collection('cursos', ref =>
        ref.where('date', '>=', startDate).orderBy('date', 'asc')
      );
    }

    // Check if component is portfolio type, if so use queries in the route
    if (component === PortfolioComponent) {
      // TODO: add pagination
      return programaFormacionDocument.collection('cursos', ref => ref.orderBy('date', 'desc'));
    }

    return null;
  }
}
