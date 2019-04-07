import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Noticia } from 'src/app/interfaces/noticia';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';

@Injectable()
export class NoticiasResolver implements Resolve<Noticia[]> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const noticiasSnap = await this._getNoticiasCollection(route)
        .get()
        .toPromise();

      if (noticiasSnap.empty) return [];
      return noticiasSnap.docs.map(doc => new Noticia(Object.assign({ id: doc.id }, doc.data())));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }

  private _getNoticiasCollection(
    route: ActivatedRouteSnapshot
  ): AngularFirestoreCollection<Noticia[]> {
    const component = route.component;

    if (component === HomeComponent) {
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
