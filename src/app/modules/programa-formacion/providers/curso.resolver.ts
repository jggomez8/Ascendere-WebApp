import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

// types
import { Curso } from 'src/app/interfaces/curso';

// TODO: add type curso
@Injectable()
export class CursoResolver implements Resolve<any> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const cursoDocument: AngularFirestoreDocument<Curso> = this._afs
        .collection('formacion-docente')
        .doc('programa-formacion')
        .collection('cursos')
        .doc(route.params.id);

      const cursoSnap = await cursoDocument.get({ source: 'cache' }).toPromise();

      if (cursoSnap.exists) return Object.assign({ id: cursoSnap.id }, cursoSnap.data());
      throw new Error('El curso no existe');
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }
}
