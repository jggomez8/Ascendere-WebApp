import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'indev-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _snackBar: MatSnackBar,
    private _router: Router
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
   * Sign user in, or show sign in error
   */
  async signIn() {
    try {
      if (this.authForm.invalid) return;

      // only valid forms will be submitted
      this.isLoading = true;
      const { email, password } = this.authForm.value;
      const userCredentials = await this._auth.signIn(email, password);

      // USer successfully signed in
      console.log(userCredentials);
      this.gotoHome();
      this._snackBar.dismiss();
    } catch (e) {
      // Manage login errors
      this.isLoading = false;
      let message: string;

      if (e.code === 'auth/wrong-password') message = 'Contraseña Incorrecta';
      else if (e.code === 'auth/invalid-email') message = 'Correo Electrónico Invalido';
      else if (e.code === 'auth/user-not-found') message = 'No se encontró el usuario';
      else message = 'Ha ocurrido un error al iniciar sección';

      this._snackBar.open(message, null, {
        verticalPosition: 'top',
        duration: 20000
      });
    }
  }

  /**
   * Navigate user if already signed in
   */
  gotoHome(): void {
    this._router.navigate(['/']);
  }
}
