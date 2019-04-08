import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Current user logged inside the application
   */
  private _user: firebase.User;

  constructor(private _afAuth: AngularFireAuth, private _router: Router) {
    _afAuth.authState.subscribe(auth => {
      this._user = auth;
    });
  }

  /**
   * whether user is authenticated or not
   */
  public get isAuthenticated(): boolean {
    return this._user !== null;
  }

  /**
   * get user unique id
   */
  public get userId(): string {
    return this.isAuthenticated ? this._user.uid : '';
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
    this._router.navigate(['/login']);
  }

  /**
   * get custom claims from user
   */
  async getCustomClaims() {
    try {
      const idToken = await this._user.getIdTokenResult();
      return idToken.claims;
    } catch (error) {
      return null;
    }
  }
}
