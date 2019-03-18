import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

// TODO: add type tip
@Injectable()
export class InnovaTipsResolver implements Resolve<any> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const innovaTipsCollection: AngularFirestoreCollection<any> = this._afs
        .collection('formacion-docente')
        .doc('programa-formacion')
        .collection('tips', ref => ref.orderBy('added', 'asc').limit(2));

      const innovaTipsSnap = await innovaTipsCollection.get().toPromise();

      if (innovaTipsSnap.empty) return [];
      return innovaTipsSnap.docs.map(doc => Object.assign({ id: doc.id }, doc.data()));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return [];
    }
  }
}
