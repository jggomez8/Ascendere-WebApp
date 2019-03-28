import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Encuentro, Encuentros } from 'src/app/interfaces/encuentro';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class EncuentrosResolver implements Resolve<Encuentros> {
  /**
   * Service used to load all the data from firebase
   * before user navigates to the page
   */
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      let encuentrosSnap = await this._afs
        .collection('formacion-docente')
        .doc('cafe-cientifico')
        .collection('encuentros', ref => ref.orderBy('date', 'desc').limit(6))
        .get()
        .toPromise();

      if (encuentrosSnap.empty) return new Encuentros();
      return new Encuentros(
        encuentrosSnap.docs.map(doc => new Encuentro(Object.assign({ id: doc.id }, doc.data())))
      );
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }
}
