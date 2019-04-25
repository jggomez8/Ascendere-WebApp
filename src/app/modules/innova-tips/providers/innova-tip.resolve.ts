import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { InnovaTip } from 'src/app/interfaces/innova-tip';

@Injectable()
export class InnovaTipResolver implements Resolve<InnovaTip> {
  constructor(private _afs: AngularFirestore, private _router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      let innovaTipsDocument: AngularFirestoreDocument<Proyecto> = this._afs
        .collection('formacion-docente/programa-formacion/tips')
        .doc(route.params.id);

      const innovaTipsSnap = await innovaTipsDocument.get().toPromise();

      if (!innovaTipsSnap.exists) throw new Error('El tip no existe');
      return new InnovaTip(Object.assign({ id: innovaTipsSnap.id }, innovaTipsSnap.data()));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this._router.navigate(['/404']);
      return null;
    }
  }
}
