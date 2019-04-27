import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/interfaces/articulo';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'indev-create-articulo',
  templateUrl: './create-articulo.component.html'
})
export class CreateArticuloComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute,
    private _router: Router,
    private _afs: AngularFirestore,
    private _afAuth: AngularFireAuth
  ) {}

  articuloFormGroup: FormGroup;
  articulo: Articulo;

  private _user: firebase.User;

  ngOnInit() {
    this._afAuth.authState.subscribe(user => {
      this._user = user;
    });

    this.articulo = this._route.snapshot.data['articulo'];

    if (!!this.articulo) this._loadFormWithData();
    else this._buildForm();
  }

  private _buildForm() {
    this.articuloFormGroup = this._formBuilder.group({
      name: [null, Validators.required],
      content: [null, Validators.required]
    });
  }

  private _loadFormWithData() {
    this.articuloFormGroup = this._formBuilder.group({
      name: [this.articulo.name, Validators.required],
      content: [this.articulo.content, Validators.required]
    });
  }

  async submit() {
    console.log(this.articuloFormGroup.value);

    try {
      // Validate if form is valid
      if (this.articuloFormGroup.invalid) {
        this._snackBar.open('❗ La forma es invalida');
        return;
      }

      // Validate if user is authenticated

      if (!this._user) {
        this._snackBar.open('❗ No tienes permiso para realizar esta acción.');
        return;
      }

      // update article
      if (!!this.articulo) {
        console.log('updating');

        this._afs
          .collection('articulo')
          .doc(this.articulo.id)
          .set({
            editor: this._user.uid,
            edited: new Date(),
            ...this.articuloFormGroup.value
          });

        this._router.navigate(['/articulo', this.articulo.id]);
        this._snackBar.open('👌 El artículo se actualizo correctamente');
        return;
      }

      // create new article
      const date = new Date();
      const name = this._scapedName;
      await this._afs
        .collection('articulo')
        .doc(name)
        .set({
          creator: this._user.uid,
          created: date,
          editor: this._user.uid,
          edited: date,
          ...this.articuloFormGroup.value
        });
      this._router.navigate(['/articulo', name]);
      this._snackBar.open('👍 El artículo se creo correctamente');
    } catch (error) {
      this._snackBar.open('❗ Ocurrido un error al guardar, por favor vuelve a intentarlo');
    }
  }

  private get _scapedName() {
    const name: string = this.articuloFormGroup.controls['name'].value;
    return name.toLowerCase().replace(/[^\w]+/g, '-');
  }
}
