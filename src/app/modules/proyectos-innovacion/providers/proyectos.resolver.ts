import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { ProyectosInnovacionComponent } from '../pages/proyectos-innovacion/proyectos-innovacion.component';
import { ProyectosComponent } from '../pages/proyectos/proyectos.component';
import { HomeComponent } from '../../home/pages/home/home.component';
import { Proyecto } from 'src/app/interfaces/proyecto';

@Injectable()
export class ProyectosResolver implements Resolve<Proyecto[]> {
  private _projectTypes: string[] = ['buena-practica', 'proyecto-actual', 'proyecto-coordinado'];
  private _areaTypes: string[] = ['administrativa', 'biologica', 'sociohumanistica', 'tecnica'];

  constructor(private _afs: AngularFirestore, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const proyectosCollection = this.getCollectionQuery(route);

      const cursosSnap = await proyectosCollection.get().toPromise();

      if (cursosSnap.empty) return [];

      return cursosSnap.docs.map(doc => new Proyecto(Object.assign({ id: doc.id }, doc.data())));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return null;
    }
  }

  /**
   * Get query for resolver based on state of the route, component calling and data
   * required by the component bia queries
   */
  private getCollectionQuery(route: ActivatedRouteSnapshot): AngularFirestoreCollection<Proyecto> {
    const component = route.component;
    const proyectosDocument: AngularFirestoreDocument = this._afs
      .collection('innovacion-docente')
      .doc('proyectos-innovacion');

    // if component is proyectos-innovacion fetch all projects
    if (component === ProyectosInnovacionComponent || component === HomeComponent)
      // TODO: get ranked projects
      // TODO: change number of components fetched
      return proyectosDocument.collection('proyectos', ref =>
        ref.limit(component === HomeComponent ? 3 : 2)
      );

    // projects component requires data

    if (component === ProyectosComponent && this._projectTypes.includes(route.queryParams['type']))
      return proyectosDocument.collection('proyectos', ref => {
        //  project also may have areas, so validate valid areas
        const area = route.queryParams['area'] || '';
        return this._areaTypes.includes(area)
          ? ref
              .where('type', '==', route.queryParams['type'])
              .orderBy('name')
              .where(`area.${area}`, '==', true)
          : ref.where('type', '==', route.queryParams['type']).orderBy('name');
      });

    return null;
  }
}
