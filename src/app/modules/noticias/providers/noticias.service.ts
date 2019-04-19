import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Noticia } from 'src/app/interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  constructor(private _afs: AngularFirestore, private _afAuth: AngularFireAuth) {
    this._afAuth.authState.subscribe(user => {
      this._user = user;
    });

    this.noticiasCollection = this._afs.collection('observatorio/edutendencias/noticias');
  }

  private _user: firebase.User;
  public noticiasCollection: AngularFirestoreCollection;

  updateNoticia(id: string, value: Noticia): Promise<void> {
    if (!this._user) throw Error('User not authenticated');

    return this.noticiasCollection.doc(id).update({
      ...value,
      edited: new Date(),
      editor: this._user.uid
    });
  }

  createNoticia(value: Noticia): Promise<firebase.firestore.DocumentReference> {
    if (!this._user) throw Error('User not authenticated');

    let date = new Date();
    return this.noticiasCollection.add({
      ...value,
      created: date,
      edited: date,
      editor: this._user.uid
    });
  }
}
