import { Component } from '@angular/core';
import { NavbarItem } from './navbar-item';

@Component({
  selector: 'indev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  links: Array<NavbarItem> = [
    {
      name: 'Servicios'
    },
    {
      name: 'Innovacion',
      children: [
        {
          name: 'Proyectos de Innovacion',
          children: [
            {
              name: 'Buenas Paacticas'
            },
            {
              name: 'Proyectos de Innovacion'
            }
          ]
        },
        {
          name: 'Otros Links',
          children: [
            {
              name: 'Ayudantes de Catedra'
            },
            {
              name: 'Combocatorias'
            }
          ]
        }
      ]
    },
    {
      name: 'Formacion',
      children: [
        {
          name: 'Programa de formcion',
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
          name: 'Encuentro',
          children: [
            {
              name: 'Cafe Cientifico'
            },
            {
              name: 'Vitamina i'
            }
          ]
        },
        {
          name: 'Jornadas De Reflection',
          children: [
            {
              name: 'Jornada 2019'
            }
          ]
        },
        {
          name: 'Diseño y desarrollo de mi asignatura',
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
              name: 'Bases DE datos'
            },
            {
              name: 'Asesoramiento'
            }
          ]
        }
      ]
    },
    {
      name: 'Observatorio Edutendencias',
      children: [
        {
          name: 'Tips de Innovacion'
        },
        {
          name: 'Noticias'
        },
        {
          name: 'Docentes Ascenderes'
        }
      ]
    },
    {
      name: 'Evaluacion'
    }
  ];
}
