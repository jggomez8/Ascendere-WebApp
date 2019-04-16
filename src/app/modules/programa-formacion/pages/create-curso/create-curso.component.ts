import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BannerCurso, Curso } from 'src/app/interfaces/curso';
import { Location } from '@angular/common';
import { ProgramaFormacionService } from '../../providers/programa-formacion.service';

@Component({
  selector: 'indev-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.scss']
})
export class CreateCursoComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _location: Location,
    private _route: ActivatedRoute,
    private _programaFormacionService: ProgramaFormacionService
  ) {}

  cursoFormGroup: FormGroup;
  types: BannerCurso[];
  curso: Curso;

  ngOnInit() {
    this.curso = (this._route.snapshot.data['curso'] as Curso) || null;
    this.types = (this._route.snapshot.data['types'] as BannerCurso[]) || null;

    this._buildForm();

    if (!!this.curso) this._loadFormWithData();
  }

  private _buildForm() {
    this.cursoFormGroup = this._formBuilder.group({
      name: [null, Validators.required],
      description: null,
      img: [null, Validators.required],
      date: [null, Validators.required],
      endDate: null,
      instructors: this._formBuilder.array([]),
      postulation: this._formBuilder.group({
        date: null,
        message: null,
        link: null
      }),
      duration: this._formBuilder.group({
        hours: null,
        days: null,
        weeks: null
      }),
      schedule: null,
      place: null,
      module: null,
      addressedTo: null,
      downloadableContent: this._formBuilder.array([])
    });
  }

  private _loadFormWithData() {
    let postulation = this.cursoFormGroup.controls['postulation'] as FormGroup;
    let duration = this.cursoFormGroup.controls['duration'] as FormGroup;

    // create fields as needed
    for (let index = 0; index < this.curso.instructors.length; index++) this.addInstructor();
    for (let index = 0; index < this.curso.downloadableContent.length; index++)
      this.addDownloadableContent();

    // set values to form
    this.cursoFormGroup.controls['name'].setValue(this.curso.name);
    this.cursoFormGroup.controls['description'].setValue(this.curso.description);
    this.cursoFormGroup.controls['img'].setValue(this.curso.img);
    this.cursoFormGroup.controls['date'].setValue(this.curso.startDate);
    this.cursoFormGroup.controls['endDate'].setValue(this.curso.endDate);
    this.cursoFormGroup.controls['instructors'].setValue(this.curso.instructors);
    this.cursoFormGroup.controls['schedule'].setValue(this.curso.schedule);
    this.cursoFormGroup.controls['place'].setValue(this.curso.place);
    this.cursoFormGroup.controls['module'].setValue(this.curso.module);
    this.cursoFormGroup.controls['addressedTo'].setValue(this.curso.addressedTo);
    this.cursoFormGroup.controls['downloadableContent'].setValue(this.curso.downloadableContent);

    postulation.controls['date'].setValue(this.curso.postulation.date);
    postulation.controls['link'].setValue(this.curso.postulation.link);
    postulation.controls['message'].setValue(this.curso.postulation.message);

    duration.controls['hours'].setValue(this.curso.duration.hours);
    duration.controls['days'].setValue(this.curso.duration.days);
    duration.controls['weeks'].setValue(this.curso.duration.weeks);
  }

  async submit() {
    // validate form
    if (this.cursoFormGroup.invalid) {
      this._snackBar.open('❗ La forma es invalida');
      return;
    }
    try {
      if (!!this.curso)
        await this._programaFormacionService.updateCurso(this.curso.id, this.cursoFormGroup.value);
      else await this._programaFormacionService.createCurso(this.cursoFormGroup.value);
      this._snackBar.open('✋ Se guardaron los cambios correctamente');
      this._location.back();
    } catch (error) {
      this._snackBar.open('❗ Ocurrido un error al guardar, por favor vuelve a intentarlo');
    }
  }

  removeInstructor() {
    this.instructors.removeAt(-1);
  }

  addInstructor() {
    this.instructors.push(
      this._formBuilder.group({
        name: [null, Validators.required],
        about: null
      })
    );
  }

  removeDownloadableContent() {
    this.downloadableContent.removeAt(-1);
  }

  addDownloadableContent() {
    this.downloadableContent.push(
      this._formBuilder.group({
        url: [null, Validators.required]
      })
    );
  }

  get img() {
    return this.cursoFormGroup.get('img');
  }
  get instructors() {
    return this.cursoFormGroup.get('instructors') as FormArray;
  }
  get downloadableContent() {
    return this.cursoFormGroup.get('downloadableContent') as FormArray;
  }
  downloadableContentUrl(i: number) {
    return this.downloadableContent.controls[i].get('url');
  }
  get uploadPath() {
    return `formacion-docente/programa-formacion/${this.cursoFormGroup.get('name').value}`;
  }
}
