import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';

@Injectable()
export class EncuentrosResolver implements Resolve<Encuentro[]> {
  constructor(private _afs: AngularFirestore) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      let encuentrosSnap = await this._getEncuentrosCollection(route)
        .get()
        .toPromise();

      return encuentrosSnap.docs.map(
        doc => new Encuentro(Object.assign({ id: doc.id }, doc.data()))
      );
    } catch (error) {
      return [];
    }
  }

  private _getEncuentrosCollection(
    route: ActivatedRouteSnapshot
  ): AngularFirestoreCollection<Encuentro[]> {
    const component = route.component;

    if (component === HomeComponent) {
      const temp = new Date();
      const startDate = new Date(temp.getFullYear(), temp.getMonth());

      return this._afs
        .collection('formacion-docente')
        .doc('cafe-cientifico')
        .collection('encuentros', ref =>
          ref.orderBy('date', 'desc').where('date', '>=', startDate)
        );
    }

    return this._afs
      .collection('formacion-docente')
      .doc('cafe-cientifico')
      .collection('encuentros', ref => ref.orderBy('date', 'desc').limit(6));
  }
}
