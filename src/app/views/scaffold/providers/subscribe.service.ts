import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  constructor(private _http: HttpClient) {}

  subscribeWithEmail(email) {
    return this._http
      .post<{ email: string }>(
        'https://innovaciondocente-utpl.firebaseio.com/meta/suscripciones.json',
        { email }
      )
      .pipe(
        map(_ => '✔ Completado'),
        catchError(_ => of('❗ Ocurrió un error al inscribirse. Vuelve a intentarlo.'))
      );
  }
}
