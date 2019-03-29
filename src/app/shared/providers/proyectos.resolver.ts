import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { ProyectosInnovacionComponent } from '../../modules/proyectos-innovacion/pages/proyectos-innovacion/proyectos-innovacion.component';
import { ProyectosComponent } from '../../modules/proyectos-innovacion/pages/proyectos/proyectos.component';
import { HomeComponent } from '../../modules/home/pages/home/home.component';
import { ProyectosInnovacion } from 'src/app/interfaces/proyecto';

@Injectable()
export class ProyectosInnovacionResolver implements Resolve<ProyectosInnovacion> {
  constructor(private _afs: AngularFirestore, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const proyectosCollection = this.getCollectionQuery(route);
      const proyectosSnap = await proyectosCollection.get().toPromise();
      return new ProyectosInnovacion(proyectosSnap);
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
  private getCollectionQuery(
    route: ActivatedRouteSnapshot
  ): AngularFirestoreCollection<ProyectosInnovacion> {
    const component = route.component;
    const proyectosDocument: AngularFirestoreDocument = this._afs
      .collection('innovacion-docente')
      .doc('proyectos-innovacion');

    // if component is proyectos-innovacion fetch all projects
    if (component === ProyectosInnovacionComponent || component === HomeComponent) {
      // TODO: get ranked projects
      // TODO: change number of documents fetched
      const projects2BeFetched = component === HomeComponent ? 2 : 3;

      return proyectosDocument.collection('proyectos', ref => ref.limit(projects2BeFetched));
    }

    // validate route data
    const proyectoType = route.queryParams['type'];
    if (component === ProyectosComponent && ProyectosInnovacion.validateType(proyectoType))
      return proyectosDocument.collection('proyectos', ref => {
        //  project also may have areas, so validate valid areas
        const area = route.queryParams['area'] || '';
        return ProyectosInnovacion.validateArea(area)
          ? ref
              .where('type', '==', proyectoType)
              .orderBy('name')
              .where(`area.${area}`, '==', true)
          : ref.where('type', '==', proyectoType).orderBy('name');
      });

    return null;
  }
}
