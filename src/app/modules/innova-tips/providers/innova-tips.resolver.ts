import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { InnovaTip } from 'src/app/interfaces/innova-tip';

@Injectable()
export class InnovaTipsResolver implements Resolve<InnovaTip[]> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const innovaTipsCollection: AngularFirestoreCollection<InnovaTip[]> = this._afs
        .collection('formacion-docente')
        .doc('programa-formacion')
        .collection('tips', ref => ref.orderBy('added', 'desc'));

      const innovaTipsSnap = await innovaTipsCollection.get().toPromise();

      if (innovaTipsSnap.empty) return [];
      return innovaTipsSnap.docs.map(
        doc => new InnovaTip(Object.assign({ id: doc.id }, doc.data()))
      );
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return [];
    }
  }
}
