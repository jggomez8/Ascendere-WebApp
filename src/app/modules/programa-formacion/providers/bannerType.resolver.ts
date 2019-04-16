import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { BannerCurso } from 'src/app/interfaces/curso';

@Injectable()
export class BannerTypeResolver implements Resolve<BannerCurso[]> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const cursoCollection: AngularFirestoreCollection<BannerCurso[]> = this._afs
        .collection('formacion-docente')
        .doc('programa-formacion')
        .collection('banner-cursos');

      const bannersSnap = await cursoCollection.get().toPromise();

      if (!bannersSnap.empty)
        return bannersSnap.docs.map(
          doc => Object.assign({ id: doc.id }, doc.data()) as BannerCurso
        );
      throw new Error('No se pudo cargar los tipos de cursos');
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }
}
