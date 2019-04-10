import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth/public_api';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private _afAuth: AngularFireAuth, private router: Router) {}

  // TODO: change to promise

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._isAuthenticated;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._isAuthenticated;
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this._isAuthenticated;
  }

  private get _user(): Observable<firebase.User> {
    return this._afAuth.authState.pipe(take(1));
  }

  private get _isAuthenticated(): Observable<boolean> {
    return this._user.pipe(
      map(authState => !!authState),
      tap(authenticated => {
        if (!authenticated) this.router.navigateByUrl('/login');
      })
    );
  }
}
