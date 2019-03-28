import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Jornada } from 'src/app/interfaces/jornada';

@Injectable()
export class JornadasResolver implements Resolve<Jornada[]> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const jornadaCollection = this._afs.collection('jornadas', ref => ref.orderBy('date', 'asc'));

      const jornadasSnap = await jornadaCollection.get().toPromise();

      if (jornadasSnap.empty) return [];

      // remove actual jornada
      const arr = jornadasSnap.docs.map(
        doc => new Jornada(Object.assign({ id: doc.id }, doc.data()))
      );
      arr.pop();

      return arr;
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }
}
