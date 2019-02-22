import { Component } from '@angular/core';
import { NavbarItem } from './navbar-item';

@Component({
  selector: 'indev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  headerMenu: Array<NavbarItem> = [
    {
      name: 'Servicios'
    },
    {
      name: 'Innovación',
      children: [
        {
          name: 'Proyectos de Innovación',
          children: [
            {
              name: 'Buenas Practicas'
            },
            {
              name: 'Proyectos de Innovación'
            }
          ]
        },
        {
          name: 'Otros Links',
          children: [
            {
              name: 'Ayudantes de Cátedra'
            },
            {
              name: 'Combinatorias'
            }
          ]
        }
      ]
    },
    {
      name: 'Formación',
      children: [
        {
          name: 'Programa de Formación',
          goto: '/',
          children: [
            {
              name: 'Cursos Actuales'
            },
            {
              name: 'InnovaTips'
            }
          ]
        },
        {
          name: 'Encuentros',
          goto: '/',
          children: [
            {
              name: 'Cafe Científico'
            },
            {
              name: 'Vitamina i'
            }
          ]
        },
        {
          name: 'Jornadas De Reflection',
          goto: '/',
          children: [
            {
              name: 'Jornada 2019'
            }
          ]
        },
        {
          name: 'Diseño y desarrollo de mi asignatura',
          goto: '/',
          children: [
            {
              name: 'Como Elaborar mi Plan Docente'
            },
            {
              name: 'Repositorio de Planes Docentes'
            },
            {
              name: 'Recursos Digitales'
            },
            {
              name: 'Bases de Datos'
            },
            {
              name: 'Asesoramiento'
            }
          ]
        }
      ]
    },
    {
      name: 'Observatorio EduTendencias',
      children: [
        {
          name: 'Tips de Innovación',
          goto: '/'
        },
        {
          name: 'Noticias',
          goto: '/'
        },
        {
          name: 'Docentes Ascenderse',
          goto: '/'
        }
      ]
    },
    {
      name: 'Evaluación'
    }
  ];
}
