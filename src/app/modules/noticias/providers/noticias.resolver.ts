import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Noticia } from 'src/app/interfaces/noticia';

@Injectable()
export class NoticiasResolver implements Resolve<Noticia[]> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const noticiasCollection: AngularFirestoreCollection<Noticia[]> = await this._afs
        .collection('observatorio')
        .doc('edutendencias')
        .collection('noticias', ref => ref.orderBy('created', 'desc'));

      const noticiasSnap = await noticiasCollection.get().toPromise();

      if (noticiasSnap.empty) return [];
      return noticiasSnap.docs.map(doc => new Noticia(Object.assign({ id: doc.id }, doc.data())));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }
}
