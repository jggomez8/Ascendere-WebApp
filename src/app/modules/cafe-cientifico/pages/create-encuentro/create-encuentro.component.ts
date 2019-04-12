import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { EncuentrosService } from '../../providers/encuentros.service';

@Component({
  selector: 'indev-create-encuentro',
  templateUrl: './create-encuentro.component.html',
  styleUrls: ['./create-encuentro.component.scss']
})
export class CreateEncuentroComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute,
    private _location: Location,
    private _encuentrosService: EncuentrosService
  ) {}

  encuentroFormGroup: FormGroup;
  encuentro: Encuentro;

  ngOnInit() {
    this.encuentro = this._route.snapshot.data['encuentro'] as Encuentro;

    this._buildForm();

    if (!!this.encuentro) this._loadFormWithData();
  }

  private _loadFormWithData() {
    for (let index = 0; index < this.encuentro.guests.length; index++) this.addGuest();

    this.encuentroFormGroup.controls['name'].setValue(this.encuentro.name);
    this.encuentroFormGroup.controls['img'].setValue(this.encuentro.img);
    this.encuentroFormGroup.controls['description'].setValue(this.encuentro.description);
    this.encuentroFormGroup.controls['participation'].setValue(this.encuentro.participation);
    this.encuentroFormGroup.controls['banner'].setValue(this.encuentro.banner);
    this.encuentroFormGroup.controls['guests'].setValue(this.encuentro.guests);
    this.encuentroFormGroup.controls['date'].setValue(this.encuentro.date);
    this.encuentroFormGroup.controls['postulations'].setValue(this.encuentro.postulations);
  }

  private _buildForm(): void {
    this.encuentroFormGroup = this._formBuilder.group({
      name: [null, Validators.required],
      img: [null, Validators.required],
      banner: [null],
      participation: [null],
      date: [null, Validators.required],
      postulations: [null],
      description: [null],
      guests: this._formBuilder.array([])
    });
  }

  /**
   * Add guest to guestFormGroup with validators
   */
  public addGuest(): void {
    this.guests.push(
      // new guest group
      this._formBuilder.group({
        name: [null, Validators.required],
        description: [null, Validators.required]
      })
    );
  }

  /**
   * Remove last guests from form
   */
  public removeGuest(): void {
    this.guests.removeAt(-1);
  }

  /**
   * Validate form value, then if the form is valid, send it to the `encuentros service`
   * to be uploaded to the server, then if success return user to last page page
   */
  public async submit(): Promise<void> {
    if (this.encuentroFormGroup.invalid) {
      this._snackBar.open('❗ La forma esta incompleta.');
      return;
    }

    // add or update
    try {
      if (!!this.encuentro)
        await this._encuentrosService.updateEncuentro(
          this.encuentro.id,
          this.encuentroFormGroup.value
        );
      else await this._encuentrosService.createEncuentro(this.encuentroFormGroup.value);
      this._snackBar.open('✋ Se guardaron los cambios correctamente');
      this._location.back();
    } catch (error) {
      console.error(error);
      this._snackBar.open(
        '❗ Ocurrió un error al guardar, verifica que iniciaste sesión y vuelve a intentarlo'
      );
    }
  }

  get img() {
    return this.encuentroFormGroup.get('img');
  }
  get banner() {
    return this.encuentroFormGroup.get('banner');
  }
  get guests() {
    return this.encuentroFormGroup.get('guests') as FormArray;
  }

  get uploadPath() {
    return `${this._encuentrosService.encuentrosCollection.ref.path}/${
      this.encuentroFormGroup.get('name').value
    }`;
  }
}
