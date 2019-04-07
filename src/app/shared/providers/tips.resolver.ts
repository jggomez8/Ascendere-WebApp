import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Tip } from 'src/app/interfaces/tip';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';

@Injectable()
export class TipsResolver implements Resolve<Tip[]> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const tipsSnap = await this._getTipsCollection(route)
        .get()
        .toPromise();

      if (tipsSnap.empty) return [];
      return tipsSnap.docs.map(doc => new Tip(Object.assign({ id: doc.id }, doc.data())));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
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
