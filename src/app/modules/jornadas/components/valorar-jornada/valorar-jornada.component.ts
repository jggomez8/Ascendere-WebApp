import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'indev-valorar-jornada',
  templateUrl: './valorar-jornada.component.html',
  styleUrls: ['./valorar-jornada.component.scss']
})
export class ValorarJornadaComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}

  valoracionForm: FormGroup;

  aplicabilidad: Array<{
    value: string;
    description: string;
  }> = [
    {
      value: 'baja',
      description: 'Baja'
    },
    {
      value: 'media',
      description: 'Media'
    },
    {
      value: 'alta',
      description: 'Alta'
    }
  ];

  aspects: Array<{
    value: string;
    description: string;
  }> = [
    {
      value: 'docencia',
      description: 'Aspectos de Docencia'
    },
    {
      value: 'investigacion',
      description: 'Aspectos de Investigación'
    },
    {
      value: 'vinculacion',
      description: 'Aspectos de Vinculación de la Titulación'
    }
  ];

  ngOnInit() {
    this.valoracionForm = this._fb.group({
      '1': [null, Validators.required],
      '2': this._fb.group({
        '0': ['', Validators.required],
        '1': ['', Validators.required]
      }),
      '3': this._fb.group({
        '1': [null, Validators.required],
        '2': [null, Validators.required],
        '3': [null, Validators.required],
        '4': [null, Validators.required]
      }),
      '4': ['', Validators.required],
      '5': ['']
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.valoracionForm.value);
  }
}
