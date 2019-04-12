import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { CreateEncuentroComponent } from '../pages/create-encuentro/create-encuentro.component';

@Injectable()
export class EncuentroResolver implements Resolve<Encuentro> {
  constructor(private _afs: AngularFirestore, private _router: Router) {}

  /**
   * get data from server if the calling component is Encuentros Detail
   * return a Encuentro if it exist, Otherwise if calling component is
   * an AdminComponent it doesn't mather if id is not provided,
   * return a null object only on that special case
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      if (route.component === CreateEncuentroComponent && !route.params.id) return null;

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
      this._router.navigate(['/404']);
      return null;
    }
  }
}
