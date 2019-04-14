import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProyectosInnovacionService } from '../../providers/proyectos-innovacion.service';

@Component({
  selector: 'indev-create-proyecto',
  templateUrl: './create-proyecto.component.html'
})
export class CreateProyectoComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute,
    private _location: Location,
    private _proyectosInnovacionService: ProyectosInnovacionService
  ) {}

  proyecto: Proyecto;
  proyectoFormGroup: FormGroup;

  ngOnInit() {
    this.proyecto = (this._route.snapshot.data['proyecto'] as Proyecto) || null;

    this._buildForm();

    if (!!this.proyecto) this._loadFormWithData();
  }

  private _buildForm(): void {
    this.proyectoFormGroup = this._formBuilder.group({
      name: [null, Validators.required],
      coordinator: [null, Validators.required],
      modality: [null],
      img: [null],
      infografic: [null],
      videoID: [null],
      area: this._formBuilder.group({
        tecnica: false,
        administrativa: false,
        biologica: false,
        sociohumanistica: false
      }),
      subject: [null],
      strategicLine: [null],
      type: [null, Validators.required],
      periods: this._formBuilder.array([]),
      participants: this._formBuilder.array([]),
      documents: this._formBuilder.array([])
    });
  }

  private _loadFormWithData() {
    // create documents as needed
    for (let index = 0; index < this.proyecto.documents.length; index++) this.addDocument();
    // create participants as needed
    for (let index = 0; index < this.proyecto.participants.length; index++) this.addParticipant();
    // create participants as needed
    for (let index = 0; index < this.proyecto.periods.length; index++) this.addPeriod();

    this.proyectoFormGroup.controls['name'].setValue(this.proyecto.name);
    this.proyectoFormGroup.controls['coordinator'].setValue(this.proyecto.coordinator);
    this.proyectoFormGroup.controls['modality'].setValue(this.proyecto.modality);
    this.proyectoFormGroup.controls['strategicLine'].setValue(this.proyecto.strategicLine);
    this.proyectoFormGroup.controls['type'].setValue(this.proyecto.type);
    this.proyectoFormGroup.controls['subject'].setValue(this.proyecto.subject);

    this.proyectoFormGroup.controls['img'].setValue(this.proyecto.img);
    this.proyectoFormGroup.controls['infografic'].setValue(this.proyecto.infografic);
    this.proyectoFormGroup.controls['videoID'].setValue(this.proyecto.videoID);
    this.proyectoFormGroup.controls['documents'].setValue(this.proyecto.documents);
    this.proyectoFormGroup.controls['periods'].setValue(this.proyecto.periods);

    this.proyectoFormGroup.controls['participants'].setValue(this.proyecto.participants);
    this.proyectoFormGroup
      .get('area')
      .get('administrativa')
      .setValue(this.proyecto.area.administrativa);
    this.proyectoFormGroup
      .get('area')
      .get('tecnica')
      .setValue(this.proyecto.area.administrativa);
    this.proyectoFormGroup
      .get('area')
      .get('biologica')
      .setValue(this.proyecto.area.biologica);
    this.proyectoFormGroup
      .get('area')
      .get('sociohumanistica')
      .setValue(this.proyecto.area.sociohumanistica);
  }

  async submit() {
    if (this.proyectoFormGroup.invalid) {
      this._snackBar.open('❗ La forma es invalida');
      return;
    }

    // add or update
    try {
      if (!!this.proyecto)
        await this._proyectosInnovacionService.updateProyecto(
          this.proyecto.id,
          this.proyectoFormGroup.value
        );
      else await this._proyectosInnovacionService.createProyecto(this.proyectoFormGroup.value);
      this._snackBar.open('✋ Se guardaron los cambios correctamente');
      this._location.back();
    } catch (error) {
      console.error(error);
      this._snackBar.open(
        '❗ Ocurrió un error al guardar, verifica que iniciaste sesión y vuelve a intentarlo'
      );
    }
  }

  public addParticipant(): void {
    this.participants.push(
      this._formBuilder.group({
        name: [null, Validators.required],
        department: [null],
        subject: [null],
        email: [null]
      })
    );
  }

  public removeParticipant(): void {
    this.participants.removeAt(-1);
  }
  public addPeriod(): void {
    this.periods.push(
      this._formBuilder.group({
        name: [null, Validators.required]
      })
    );
  }

  public removePeriod(): void {
    this.periods.removeAt(-1);
  }

  public addDocument(): void {
    this.documents.push(
      this._formBuilder.group({
        url: [null, Validators.required]
      })
    );
  }

  public removeDocument(): void {
    this.documents.removeAt(-1);
  }

  get getUploadPath() {
    return `/innovacion-docente/proyectos-innovacion/${this.proyectoFormGroup.get('name').value}`;
  }

  get img() {
    return this.proyectoFormGroup.get('img');
  }
  get infografic() {
    return this.proyectoFormGroup.get('infografic');
  }
  get type() {
    return this.proyectoFormGroup.get('type');
  }

  get participants() {
    return this.proyectoFormGroup.get('participants') as FormArray;
  }

  get periods() {
    return this.proyectoFormGroup.get('periods') as FormArray;
  }

  get documents() {
    return this.proyectoFormGroup.get('documents') as FormArray;
  }
  documentUrl(i: number) {
    return this.documents.controls[i].get('url');
  }
}
