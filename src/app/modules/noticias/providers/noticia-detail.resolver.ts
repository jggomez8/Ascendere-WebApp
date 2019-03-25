import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Noticia } from 'src/app/interfaces/noticia';

@Injectable()
export class NoticiaDetailResolver implements Resolve<Noticia> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const noticiaDocument: AngularFirestoreDocument<Noticia> = this._afs
        .collection('observatorio')
        .doc('edutendencias')
        .collection('noticias')
        .doc(route.params.id);

      const noticiaSnap = await noticiaDocument.get().toPromise();

      if (noticiaSnap.exists)
        return new Noticia(Object.assign({ id: noticiaSnap.id }, noticiaSnap.data()));
      throw new Error('La noticia no existe');
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }
}
