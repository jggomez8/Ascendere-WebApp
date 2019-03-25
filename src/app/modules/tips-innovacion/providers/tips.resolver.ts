import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Tip } from 'src/app/interfaces/tip';

@Injectable()
export class TipsResolver implements Resolve<Tip[]> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const tipsCollection: AngularFirestoreCollection<Tip[]> = await this._afs
        .collection('observatorio')
        .doc('edutendencias')
        .collection('tips', ref =>
          ref.orderBy('edited', 'desc').where('tag', '==', route.params.id)
        );

      const tipsSnap = await tipsCollection.get().toPromise();

      if (tipsSnap.empty) return [];
      return tipsSnap.docs.map(doc => new Tip(Object.assign({ id: doc.id }, doc.data())));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }
}
