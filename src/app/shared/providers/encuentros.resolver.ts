import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';
import { CafeCientificoAdminComponent } from 'src/app/modules/cafe-cientifico/pages/cafe-cientifico-admin/cafe-cientifico-admin.component';

@Injectable()
export class EncuentrosResolver implements Resolve<Encuentro[]> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      let encuentrosSnap = await this._getEncuentrosCollection(route)
        .get()
        .toPromise();

      if (encuentrosSnap.empty) return [];
      return encuentrosSnap.docs.map(
        doc => new Encuentro(Object.assign({ id: doc.id }, doc.data()))
      );
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
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

    // TODO: add pagination
    if (component === CafeCientificoAdminComponent)
      return this._afs
        .collection('formacion-docente')
        .doc('cafe-cientifico')
        .collection('encuentros', ref => ref.orderBy('date', 'desc'));

    return this._afs
      .collection('formacion-docente')
      .doc('cafe-cientifico')
      .collection('encuentros', ref => ref.orderBy('date', 'desc').limit(6));
  }
}
