import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavbarItem } from '../../interfaces/navbar-item.interface';

@Component({
  selector: 'indev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  headerMenu: Array<NavbarItem> = [
    {
      name: 'Servicios',
      routerLink: ['/', 'empty', 'ascendere']
    },
    {
      name: 'Innovación',
      children: [
        {
          name: 'Proyectos de Innovación',
          routerLink: ['/', 'proyectos-innovacion'],
          children: [
            {
              name: 'Buenas Practicas'
            },
            {
              name: 'Proyectos Actuales'
            }
          ]
        },
        {
          children: [
            {
              name: 'Ayudantes de Cátedra',
              routerLink: ['/', 'articulo', 'ayudantes-de-catedra']
            },
            {
              name: 'Convocatorias'
            },
            {
              name: 'Proyecto Mentores',
              routerLink: ['/', 'articulo', 'proyecto-mentores']
            },
            {
              name: 'Retos',
              goto: 'https://retos.utpl.edu.ec/'
            }
          ]
        }
      ]
    },
    {
      name: 'Formación',
      children: [
        {
          name: 'Formación Docente',
          children: [
            {
              name: 'Cafe Científico',
              routerLink: ['/', 'cafe-cientifico']
            },
            {
              name: 'Debate Estudiantil',
              routerLink: ['/', 'debate-estudiantil']
            },
            {
              name: 'InnovaTips',
              routerLink: ['/', 'innova-tips']
            },
            {
              name: 'Programa de Formación',
              routerLink: ['/', 'programa-formacion']
            },
            {
              name: 'Talleres Académicos',
              routerLink: ['/', 'talleres-academicos']
            },
            {
              name: 'Vitamina I',
              routerLink: ['/', 'vitamina-i']
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
      name: 'EduTendencias',
      children: [
        {
          name: 'Observatorio Edutendencias'
        },
        {
          name: 'Tips de Innovación',
          children: [
            {
              name: 'Aula Divertida'
            },
            {
              name: 'Docentes del Futuro'
            },
            {
              name: 'Podcast'
            },
            {
              name: 'Videos'
            }
          ]
        },
        {
          name: 'Noticias'
        },

        {
          name: 'Docentes Ascenderes',
          goto: 'https://www.youtube.com/channel/UCzRd2Y87-NJnVliV8B6e_Xg'
        }
      ]
    }
  ];

  @ViewChild('mainNavbar') mainNavbarElement: ElementRef;

  /**
   * toggle navbar open or close
   */
  toggleNavbar() {
    const el = this.mainNavbarElement.nativeElement as HTMLElement;

    // if element contains active, remove it, otherwise add it
    if (el.classList.contains('active-navbar')) {
      el.classList.remove('active-navbar');
      return;
    }
    el.classList.add('active-navbar');
  }
}
