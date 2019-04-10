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
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotAuthenticatedGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private _afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._isNotAuthenticated;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._isNotAuthenticated;
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this._isNotAuthenticated;
  }

  private get _user(): Observable<firebase.User> {
    return this._afAuth.authState.pipe(take(1));
  }

  private get _isNotAuthenticated(): Observable<boolean> {
    return this._user.pipe(
      map(authState => !authState),
      tap(notAuthenticated => {
        if (!notAuthenticated) this.router.navigateByUrl('/');
      })
    );
  }
}
