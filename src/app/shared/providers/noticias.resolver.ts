import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Noticia } from 'src/app/interfaces/noticia';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';
import { NoticiaDetailComponent } from 'src/app/modules/noticias/pages/noticia-detail/noticia-detail.component';

@Injectable()
export class NoticiasResolver implements Resolve<Noticia[]> {
  constructor(private _afs: AngularFirestore) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const noticiasSnap = await this._getNoticiasCollection(route)
        .get()
        .toPromise();

      return noticiasSnap.docs.map(doc => new Noticia(Object.assign({ id: doc.id }, doc.data())));
    } catch (error) {
      return [];
    }
  }

  private _getNoticiasCollection(
    route: ActivatedRouteSnapshot
  ): AngularFirestoreCollection<Noticia[]> {
    const component = route.component;

    if (component === HomeComponent || component === NoticiaDetailComponent) {
      // TODO: add limit date
      return this._afs
        .collection('observatorio')
        .doc('edutendencias')
        .collection('noticias', ref => ref.orderBy('created', 'desc').limit(4));
    }

    return this._afs
      .collection('observatorio')
      .doc('edutendencias')
      .collection('noticias', ref => ref.orderBy('created', 'desc'));
  }
}
