import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'indev-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  constructor(
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private _afAuth: AngularFireAuth,
    private _el: ElementRef<HTMLElement>
  ) {}

  authForm: FormGroup;
  hide: boolean = true;
  isLoading: boolean = false;

  ngOnInit() {
    this.authForm = this._fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  /**
   * Clean error messages, if necessary
   */
  ngOnDestroy() {
    this._snackBar.dismiss();
  }

  /**
   * Sign user in an then redirect this user to corresponding page,
   * or show sign in error
   */
  async signIn() {
    let el: HTMLElement;
    try {
      if (this.authForm.invalid) return;

      this.isLoading = true;
      const { email, password } = this.authForm.value;
      await this._afAuth.auth.signInWithEmailAndPassword(email, password);
      this._returnTo();
    } catch (e) {
      this._showErrorMessage(e);
    }
  }

  /**
   * Navigate user to las page user visited, if no page is provided
   * user is redirected to home page
   */
  private _returnTo() {
    const params = this.route.snapshot.queryParamMap['params'];

    this.router.navigate([params['return_to']]);
  }

  /**
   * Show message based on user input
   */
  private _showErrorMessage(error) {
    this.isLoading = false;
    let message: string;

    if (error.code === 'auth/wrong-password') message = 'Contraseña Incorrecta';
    else if (error.code === 'auth/invalid-email') message = 'Correo Electrónico Invalido';
    else if (error.code === 'auth/user-not-found') message = 'No se encontró el usuario';
    else message = 'Ha ocurrido un error al iniciar sección';

    this._snackBar.open(message);
  }
}
