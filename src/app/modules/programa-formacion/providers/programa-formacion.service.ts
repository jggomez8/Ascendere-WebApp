import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Curso } from 'src/app/interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class ProgramaFormacionService {
  constructor(private _afs: AngularFirestore, private _afAuth: AngularFireAuth) {
    this._afAuth.authState.subscribe(user => {
      this._user = user;
    });

    // ref to firestore collection
    this.cursosCollection = this._afs.collection(
      'formacion-docente/programa-formacion/cursos',
      ref => ref.orderBy('date', 'desc')
    );
  }

  private _user: firebase.User;
  public cursosCollection: AngularFirestoreCollection;

  public createCurso(curso: Curso): Promise<firebase.firestore.DocumentReference> {
    if (!this._user) throw Error('User not authenticated');

    let date = new Date();
    return this.cursosCollection.add({
      ...curso,
      created: date,
      edited: date,
      creator: this._user.uid
    });
  }

  public updateCurso(id: string, curso: Curso): Promise<void> {
    if (!this._user) throw Error('User not authenticated');

    return this.cursosCollection.doc(id).update({
      ...curso,
      edited: new Date(),
      editor: this._user.uid
    });
  }
}
