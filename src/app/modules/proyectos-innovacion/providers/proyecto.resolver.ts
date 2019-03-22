import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Proyecto } from 'src/app/interfaces/proyecto';

// TODO: add type proyecto
@Injectable()
export class ProyectoResolver implements Resolve<Proyecto> {
  constructor(private _afs: AngularFirestore, private _router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      let proyectoDocument: AngularFirestoreDocument<Proyecto> = this._afs
        .collection('innovacion-docente')
        .doc('proyectos-innovacion')
        .collection('proyectos')
        .doc(route.params.id);

      const proyectoSnap = await proyectoDocument.get().toPromise();

      if (!proyectoSnap.exists) throw new Error('Proyecto no existe');
      return new Proyecto(Object.assign({ id: proyectoSnap.id }, proyectoSnap.data()));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this._router.navigate(['/404']);
      return null;
    }
  }
}
