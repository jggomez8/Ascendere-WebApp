import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Curso } from 'src/app/interfaces/curso';
import { ProgramaFormacionComponent } from '../../modules/programa-formacion/pages/programa-formacion/programa-formacion.component';
import { HomeComponent } from '../../modules/home/pages/home/home.component';
import { PortfolioCursosComponent } from 'src/app/modules/programa-formacion/pages/portfolio-cursos/portfolio-cursos.component';
import { ProgramaFormacionAdminComponent } from 'src/app/modules/programa-formacion/pages/programa-formacion-admin/programa-formacion-admin.component';

@Injectable()
export class CursosResolver implements Resolve<Curso[]> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

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

    // If data is requested by the `home` or `programa-formacion home` return the future courses
    if (component === ProgramaFormacionComponent || component === HomeComponent) {
      const temp = new Date();
      const startDate = new Date(temp.getFullYear(), temp.getMonth());
      return this._afs
        .collection('formacion-docente')
        .doc('programa-formacion')
        .collection('cursos', ref => ref.where('date', '>=', startDate).orderBy('date', 'asc'));
    }

    if (component === ProgramaFormacionAdminComponent)
      return this._afs
        .collection('formacion-docente')
        .doc('programa-formacion')
        .collection('cursos', ref => ref.orderBy('date', 'desc').limit(2));

    // Check if component is portfolio type, if so use queries in the route
    if (component === PortfolioCursosComponent) {
      // TODO: add pagination
      return this._afs
        .collection('formacion-docente')
        .doc('programa-formacion')
        .collection('cursos', ref => ref.orderBy('date', 'desc'));
    }

    return null;
  }
}
