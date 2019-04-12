import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  constructor(private _afAuth: AngularFireAuth) {}

  private _customClaims(role): Observable<any> {
    return this._afAuth.authState.pipe(
      switchMap(authState =>
        of(authState).pipe(
          switchMap(val => from(val.getIdTokenResult())),
          map(token => token.claims),
          catchError(err => of(null))
        )
      ),
      map(claims => claims && claims.role === role)
    );
  }

  get isAdmin() {
    return this._customClaims('admin');
  }
  get isModerator() {
    return this._customClaims('moderator');
  }
}
