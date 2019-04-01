import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'indev-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent {
  constructor(private _location: Location) {}

  personal = [
    {
      name: 'PhD. María Isabel Loaiza',
      content: 'Dirección de Innovación, Formación y Evaluación Docente',
      image:
        'https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/index%2FMI.jpg?alt=media&token=a7d1523d-a0f4-4f7e-bfb4-d07af5cb145c'
    },
    {
      name: 'Ing. Nuve Briceño',
      content: 'Formación Docente',
      image:
        'https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2FNuve.jpg?alt=media&token=04299d85-7d07-4858-8d54-204ff1ef5705'
    },
    {
      name: 'Mgtr. Angela Salazar',
      content: 'Innovación Docente',
      image:
        'https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2FAngela.jpg?alt=media&token=7a376226-ff6d-487f-9f14-c480ffe4fbb7'
    },
    {
      name: 'Mgtr. Lourdes Cueva',
      content: 'Evaluación Docente',
      image:
        'https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2FLourdes.jpg?alt=media&token=0d6affea-bb7a-406c-b092-100cf67c4b8d'
    }
  ];

  goBack() {
    this._location.back();
  }
}
