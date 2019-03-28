import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Noticia, Noticias } from 'src/app/interfaces/noticia';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';

@Injectable()
export class NoticiasResolver implements Resolve<Noticias> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const noticiasCollection = this._getNoticiasCollection(route);

      const noticiasSnap = await noticiasCollection.get().toPromise();

      if (noticiasSnap.empty) return new Noticias();
      return new Noticias(
        noticiasSnap.docs.map(doc => new Noticia(Object.assign({ id: doc.id }, doc.data())))
      );
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }

  private _getNoticiasCollection(
    route: ActivatedRouteSnapshot
  ): AngularFirestoreCollection<Noticias> {
    const component = route.component;
    const observatorioDocument = this._afs.collection('observatorio').doc('edutendencias');

    if (component === HomeComponent) {
      // TODO: add limit date
      return observatorioDocument.collection('noticias', ref =>
        ref.orderBy('created', 'desc').limit(4)
      );
    }

    return observatorioDocument.collection('noticias', ref => ref.orderBy('created', 'desc'));
  }
}
