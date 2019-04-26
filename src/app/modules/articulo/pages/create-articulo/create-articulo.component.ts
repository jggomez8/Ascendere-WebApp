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
    this.articulo = this._route.snapshot.data['articulo'];

    this._buildForm();

    if (!!this.articulo) this._loadFormWithData();
  }

  private _buildForm() {
    this.articuloFormGroup = this._formBuilder.group({
      name: [null, Validators.required],
      content: [null, Validators.required]
    });
  }

  private _loadFormWithData() {
    this.articuloFormGroup.controls['name'].setValue(this.articulo.name);
    this.articuloFormGroup.controls['description'].setValue(this.articulo.content);
  }

  async submit() {
    if (this.articuloFormGroup.invalid) {
      this._snackBar.open('❗ La forma es invalida');
      return;
    }
    try {
      if (!!this.articulo) {
        this._afs
          .collection('articulo')
          .doc('sdf')
          .set({
            addBy: this._user.uid,
            added: new Date(),
            ...this.articuloFormGroup.value
          });
        await this._noticiasServiceService.updateNoticia(
          this.noticia.id,
          this.articuloFormGroup.value
        );
        this._router.navigate(['/noticias/noticia', this.noticia.id]);
        this._snackBar.open('👌 Se actualizo la noticia correctamente');
      } else {
        await this._noticiasServiceService.createNoticia(this.articuloFormGroup.value);
        this._router.navigate(['/noticias']);
        this._snackBar.open('👍 Se creo la noticia correctamente');
      }
    } catch (error) {
      this._snackBar.open('❗ Ocurrido un error al guardar, por favor vuelve a intentarlo');
    }
  }
}
