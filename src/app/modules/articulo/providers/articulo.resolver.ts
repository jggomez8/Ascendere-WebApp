import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Articulo } from 'src/app/interfaces/articulo';

@Injectable()
export class ArticuloResolver implements Resolve<Articulo> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const articuloDocument: AngularFirestoreDocument<Articulo> = this._afs
        .collection('articulo')
        .doc(route.params.id);

      const articuloSnap = await articuloDocument.get().toPromise();

      if (articuloSnap.exists)
        return new Articulo(Object.assign({ id: articuloSnap.id }, articuloSnap.data()));
      throw new Error('El Articulo no existe');
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }
}
