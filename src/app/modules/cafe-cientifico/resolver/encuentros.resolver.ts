import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// provide
import { CafeCientificoService } from '../cafe-cientifico.service';

// TODO: add type Encuentro
@Injectable()
export class EncuentrosResolver implements Resolve<any> {
  /**
   * Service used to load all the data from firebase
   * before user navigates to the page
   */
  constructor(private _cafeCientificoService: CafeCientificoService, private router: Router) {}

  /**
   * Get documents from firebase
   */
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      let encuentrosSnap = await this._cafeCientificoService.encuentrosCollection.get().toPromise();

      if (encuentrosSnap.empty) return [];
      return encuentrosSnap.docs.map(doc => Object.assign({ id: doc.id }, doc.data()));
    } catch (error) {
      console.error(error);
      // TODO: add err page
      this.router.navigate(['/404']);
      return [];
    }
  }
}
