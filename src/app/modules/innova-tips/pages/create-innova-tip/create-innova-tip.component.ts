import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Http, URLSearchParams } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'indev-create-innova-tip',
  templateUrl: './create-innova-tip.component.html'
})
export class CreateInnovaTipComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _location: Location,
    private _http: Http,
    private _afs: AngularFirestore,
    private _afAuth: AngularFireAuth
  ) {}

  innovaTipFormGroup: FormGroup;
  private _user: firebase.User;

  ngOnInit() {
    this._afAuth.authState.subscribe(user => {
      this._user = user;
    });

    this.innovaTipFormGroup = this._formBuilder.group({
      videoId: [null, Validators.required],
      apiKey: [null, Validators.required]
    });
  }

  /**
   * fetch data from YouTube api, validate it and generate new object whit the data.
   * store new object in the db
   */
  public async submit(): Promise<void> {
    if (this.innovaTipFormGroup.invalid) {
      this._snackBar.open('❗ La forma es invalida');
      return;
    }
    try {
      const data = await this._getYouTubeVideoData(this.innovaTipFormGroup.value);

      // validate resp
      if (data.items.length === 0) throw 'Not found';

      const video = data.items[0];
      const snippet = video['snippet'];

      this._afs
        .collection('formacion-docente/programa-formacion/tips')
        .doc(video['id'])
        .set({
          addBy: this._user.uid,
          added: new Date(),
          name: snippet.title,
          description: snippet.description,
          publishedAt: snippet.publishedAt
        });

      this._snackBar.open('Se guardaron los cambios correctamente');
      this._location.back();
    } catch (error) {
      let msn;
      if (error === 'Bad Request') msn = '❗ La key no es valida';
      else if (error === '❗ Not found') msn = 'El video no se encontro';
      else msn = ' ❗ Ocurrido un error al guardar, por favor vuelve a intentarlo';

      this._snackBar.open(msn);
    }
  }

  /**
   * get video data from YouTube, and parsed as json
   * @param apiKey for YouTube api v3
   * @param videoId for specific video
   */
  private async _getYouTubeVideoData({ apiKey, videoId }): Promise<any> {
    try {
      const url = 'https://www.googleapis.com/youtube/v3/videos';
      const params = new URLSearchParams();
      params.set('part', 'snippet');
      params.set('key', apiKey);
      params.set('id', videoId);

      const res = await this._http.get(url, { search: params }).toPromise();
      return res.json();
    } catch (error) {
      throw 'Bad Request';
    }
  }
}
