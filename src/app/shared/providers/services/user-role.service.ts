import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  constructor(private _afAuth: AngularFireAuth) {}

  private get _customClaims(): Observable<any> {
    return this._afAuth.authState.pipe(
      switchMap(authState =>
        of(authState).pipe(
          switchMap(val => from(val.getIdTokenResult())),
          map(token => token.claims),
          catchError(err => of(null))
        )
      )
    );
  }

  get isAdmin() {
    return this._customClaims.pipe(map(claims => claims && claims.role === 'admin'));
  }
  get isModerator() {
    return this._customClaims.pipe(map(claims => claims && claims.role === 'moderator'));
  }
}
