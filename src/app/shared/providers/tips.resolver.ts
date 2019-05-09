import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Tip } from 'src/app/interfaces/tip';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';

@Injectable()
export class TipsResolver implements Resolve<Tip[]> {
  constructor(private _afs: AngularFirestore) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const tipsSnap = await this._getTipsCollection(route)
        .get()
        .toPromise();

      return tipsSnap.docs.map(doc => new Tip(Object.assign({ id: doc.id }, doc.data())));
    } catch (error) {
      return [];
    }
  }

  private _getTipsCollection(route: ActivatedRouteSnapshot): AngularFirestoreCollection<Tip[]> {
    const component = route.component;

    if (component === HomeComponent)
      return this._afs
        .collection('observatorio')
        .doc('edutendencias')
        .collection('tips', ref => ref.orderBy('created', 'desc').limit(3));

    return this._afs
      .collection('observatorio')
      .doc('edutendencias')
      .collection('tips', ref =>
        ref.orderBy('created', 'desc').where('tag', '==', route.params.id)
      );
  }
}
