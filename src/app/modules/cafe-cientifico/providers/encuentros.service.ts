import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Encuentro } from 'src/app/interfaces/encuentro';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
// TODO: add type
export class EncuentrosService {
  constructor(
    private _afs: AngularFirestore,
    private _afAuth: AngularFireAuth,
    private _angularFireFunctions: AngularFireFunctions
  ) {
    this._afAuth.authState.subscribe(user => {
      this._user = user;
    });

    // ref to firestore collection
    this.encuentrosCollection = this._afs.collection(
      'formacion-docente/cafe-cientifico/encuentros',
      ref => ref.orderBy('date', 'desc')
    );
  }

  private _user: firebase.User;
  public encuentrosCollection: AngularFirestoreCollection = null;

  public createEncuentro(encuentro: Encuentro): Promise<firebase.firestore.DocumentReference> {
    if (!this._user) throw Error('User not authenticated');

    let date = new Date();
    return this.encuentrosCollection.add({
      ...encuentro,
      created: date,
      edited: date,
      creator: this._user.uid
    });
  }

  public updateEncuentro(id: string, encuentro: Encuentro): Promise<void> {
    if (!this._user) throw Error('User not authenticated');

    return this.encuentrosCollection.doc(id).update({
      ...encuentro,
      edited: new Date(),
      editor: this._user.uid
    });
  }

  public getInscripciones(data: any): Observable<any> {
    if (!this._user) throw Error('User not authenticated');

    const callable = this._angularFireFunctions.httpsCallable('inscriptionCSV');
    return callable(data);
  }
}
