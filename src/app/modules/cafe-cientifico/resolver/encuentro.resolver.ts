import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Encuentro } from 'src/app/interfaces/encuentro';

@Injectable()
export class EncuentroResolver implements Resolve<Encuentro> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const cursoDocument: AngularFirestoreDocument<Encuentro> = this._afs
        .collection('formacion-docente')
        .doc('cafe-cientifico')
        .collection('encuentros')
        .doc(route.params.id);

      const cursoSnap = await cursoDocument.get().toPromise();

      if (cursoSnap.exists)
        return new Encuentro(Object.assign({ id: cursoSnap.id }, cursoSnap.data()));
      throw new Error('El encuentro no existe');
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }
}
