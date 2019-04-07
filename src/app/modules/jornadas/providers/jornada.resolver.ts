import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Jornada } from 'src/app/interfaces/jornada';
import { JornadaDetailComponent } from '../pages/jornada-detail/jornada-detail.component';

@Injectable()
export class JornadaResolver implements Resolve<Jornada> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const jornadaCollection = this._afs.collection('jornadas', ref =>
        ref.orderBy('date', 'desc')
      );

      const encuentrosSnap: firebase.firestore.DocumentSnapshot = await this._getJornadaSnapshot(
        route
      );

      if (!encuentrosSnap.exists) throw new Error('Document does not exist');
      return new Jornada(Object.assign({ id: encuentrosSnap.id }, encuentrosSnap.data()));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }

  private async _getJornadaSnapshot(route: ActivatedRouteSnapshot) {
    // jornada requires specific data of document, so use id value in route params
    if (route.component === JornadaDetailComponent)
      return await this._afs
        .collection('jornadas')
        .doc(route.params.id)
        .get()
        .toPromise();

    // return reference to last document in my jornada collection
    const jornadaCollection = this._afs.collection('jornadas', ref =>
      ref.orderBy('date', 'desc').limit(1)
    );
    // get data for all documents in query, in this case is limited to only one
    const jornadasSnap = await jornadaCollection.get().toPromise();

    // assign data to document, if collection is empty document will be null.
    let ultimaJornadaDocument = null;
    jornadasSnap.docs.map(doc => (ultimaJornadaDocument = doc));
    return ultimaJornadaDocument;
  }
}
