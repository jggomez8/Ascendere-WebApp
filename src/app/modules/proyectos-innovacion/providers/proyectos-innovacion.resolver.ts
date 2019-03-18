import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

// declarations
import { ProyectosInnovacionComponent } from '../pages/proyectos-innovacion/proyectos-innovacion.component';
import { ProyectosComponent } from '../pages/proyectos/proyectos.component';
import { HomeComponent } from '../../home/pages/home/home.component';

// types
import { ProyectoInnovacion } from 'src/app/interfaces/proyecto-innovacion';

// TODO: add type proyecto
@Injectable()
export class ProyectosResolver implements Resolve<any> {
  private _projectTypes: string[] = ['buena-practica', 'proyecto-actual', 'proyecto-coordinado'];
  private _areaTypes: string[] = ['administrativa', 'biologica', 'sociohumanistica', 'tecnica'];

  constructor(private _afs: AngularFirestore, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log({ route, state });
    try {
      let proyectosCollection = this.getCollectionQuery(route);

      const cursosSnap = await proyectosCollection.get().toPromise();

      if (cursosSnap.empty) return [];
      let temp = cursosSnap.docs.map(doc => Object.assign({ id: doc.id }, doc.data()));
      console.log(temp);

      return temp;
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return [];
    }
  }

  /**
   * Get query for resolver based on state of the route, component calling and data
   * required by the component bia queries
   */
  private getCollectionQuery(
    route: ActivatedRouteSnapshot
  ): AngularFirestoreCollection<ProyectoInnovacion> {
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
              .where(`area.${area}`, '==', true)
              .limit(2)
          : ref.where('type', '==', route.queryParams['type']).limit(2);
      });

    return null;
  }
}
