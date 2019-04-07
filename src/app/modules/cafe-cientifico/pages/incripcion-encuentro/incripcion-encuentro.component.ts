import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { Location } from '@angular/common';

@Component({
  selector: 'indev-incripcion-encuentro',
  templateUrl: './incripcion-encuentro.component.html',
  styleUrls: ['./incripcion-encuentro.component.scss']
})
export class IncripcionEncuentroComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _location: Location
  ) {}

  public inscriptionForm: FormGroup;
  public encuentro: Encuentro;

  ngOnInit() {
    console.log(this._route.snapshot);
    this.encuentro = this._route.snapshot.data['encuentro'];

    this.inscriptionForm = this._fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      titulacion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)]
      ],
      university: ['Universidad Técnica Particular de Loja', Validators.required],
      city: ['Loja', Validators.required]
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.inscriptionForm.value);
  }

  cancelInscription() {
    // TODO: ask if user wants to return if the form has elements
    this._location.back();
  }
}
