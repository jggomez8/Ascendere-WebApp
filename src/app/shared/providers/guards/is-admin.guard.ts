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
import { UserRoleService } from '../services/user-role.service';
import { take, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private _userRole: UserRoleService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._userRole.isAdmin.pipe(
      take(1),
      tap(isAdmin => {
        if (!isAdmin) this._notAllowedDialog();
      })
    );
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._userRole.isAdmin.pipe(
      take(1),
      tap(isAdmin => {
        if (!isAdmin) this._notAllowedDialog();
      })
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this._userRole.isAdmin.pipe(
      take(1),
      tap(isAdmin => {
        if (!isAdmin) this._notAllowedDialog();
      })
    );
  }

  private _notAllowedDialog() {
    const snackBarRef = this._snackBar.open(
      'No tienes los privilegios para acceder a esta pagina.',
      'Inicio',
      { verticalPosition: 'top', duration: 20000 }
    );

    snackBarRef.onAction().subscribe(() => {
      this._router.navigateByUrl('/');
    });
  }
}
