import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/interfaces/noticia';
import { NoticiasService } from '../../providers/noticias.service';

@Component({
  selector: 'indev-create-noticia',
  templateUrl: './create-noticia.component.html'
})
export class CreateNoticiaComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute,
    private _noticiasServiceService: NoticiasService,
    private _router: Router
  ) {}

  noticiaFormGroup: FormGroup;
  noticia: Noticia;

  ngOnInit() {
    this.noticia = this._route.snapshot.data['noticia'] as Noticia;

    this._buildForm();

    if (!!this.noticia) this._loadFormWithData();
  }

  private _buildForm() {
    this.noticiaFormGroup = this._formBuilder.group({
      name: [null, Validators.required],
      img: [null, Validators.required],
      html: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  private _loadFormWithData() {
    this.noticiaFormGroup.controls['name'].setValue(this.noticia.name);
    this.noticiaFormGroup.controls['img'].setValue(this.noticia.img);
    this.noticiaFormGroup.controls['description'].setValue(this.noticia.description);
    this.noticiaFormGroup.controls['html'].setValue(this.noticia.html);
  }

  /**
   * Validate if form is valid, or completed.
   * if success navigate user to detail page,
   * otherwise show error message
   */
  async submit() {
    if (this.noticiaFormGroup.invalid) {
      this._snackBar.open('❗ La forma es invalida');
      return;
    }
    try {
      if (!!this.noticia) {
        await this._noticiasServiceService.updateNoticia(
          this.noticia.id,
          this.noticiaFormGroup.value
        );
        this._router.navigate(['/noticias/noticia', this.noticia.id]);
        this._snackBar.open('👌 Se actualizo la noticia correctamente');
      } else {
        await this._noticiasServiceService.createNoticia(this.noticiaFormGroup.value);
        this._router.navigate(['/noticias']);
        this._snackBar.open('👍 Se creo la noticia correctamente');
      }
    } catch (error) {
      this._snackBar.open('❗ Ocurrido un error al guardar, por favor vuelve a intentarlo');
    }
  }

  get uploadPath() {
    return `/observatorio-edutendencias/noticias/${this.name.value}`;
  }

  get name() {
    return this.noticiaFormGroup.get('name');
  }
  get img() {
    return this.noticiaFormGroup.get('img');
  }
}
