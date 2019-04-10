import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Current user logged inside the application
   */
  public user: firebase.User;

  constructor(private _afAuth: AngularFireAuth, private _router: Router) {
    this._afAuth.authState.subscribe(auth => {
      this.user = auth;
    });
  }

  /**
   * whether user is authenticated or not
   */
  public get isAuthenticated(): boolean {
    return this.user !== null;
  }

  /**
   * get user unique id
   */
  public get userId(): string {
    return this.isAuthenticated ? this.user.uid : '';
  }

  /**
   * Login user
   * @param email of user
   * @param password of account
   */
  public signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this._afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Sign out
   */
  public signOut(): void {
    this._afAuth.auth.signOut();
    // TODO: remove this navigation
    // this._router.navigate(['/login']);
  }

  /**
   * get custom claims from user
   */
  async getCustomClaims() {
    try {
      const idToken = await this.user.getIdTokenResult();
      return idToken.claims;
    } catch (error) {
      return null;
    }
  }

  public get currentUserObservable(): Observable<firebase.User> {
    return this._afAuth.authState;
  }
}
