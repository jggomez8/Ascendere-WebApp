import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

// types
import { Curso } from 'src/app/interfaces/curso';

// TODO: add type encuentro
@Injectable()
export class CursosResolver implements Resolve<any> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 1);

      const cursosCollection: AngularFirestoreCollection<Curso[]> = this._afs
        .collection('formacion-docente')
        .doc('programa-formacion')
        .collection('cursos', ref => ref.where('date', '>=', startDate).orderBy('date', 'asc'));

      const cursosSnap = await cursosCollection.get().toPromise();

      if (cursosSnap.empty) return [];
      return cursosSnap.docs.map(doc => Object.assign({ id: doc.id }, doc.data()));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return [];
    }
  }
}
