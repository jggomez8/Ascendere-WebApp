import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavbarItem } from '../../interfaces/navbar-item.interface';
import { Router, NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'indev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
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
              name: 'Buenas Practicas',
              routerLink: ['/', 'proyectos-innovacion', 'proyectos'],
              queryParams: { type: 'buena-practica' }
            },
            {
              name: 'Proyectos Actuales',
              routerLink: ['/', 'proyectos-innovacion', 'proyectos'],
              queryParams: { type: 'proyecto-actual' }
            },
            {
              name: 'Proyectos Coordinados',
              routerLink: ['/', 'proyectos-innovacion', 'proyectos'],
              queryParams: { type: 'proyecto-coordinado' }
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
          name: 'Jornadas De Reflection Académica',
          children: [
            {
              name: 'Jornada Actual',
              routerLink: ['/', 'jornadas']
            },
            {
              name: 'Portafolio de Jornadas',
              routerLink: ['/', 'jornadas', 'portafolio']
            }
          ]
        },
        {
          name: 'Desarrollo de mi asignatura',
          routerLink: ['/', 'desarrollo-asignatura'],
          children: [
            {
              name: 'Como Elaborar mi Plan Docente',
              routerLink: ['/', 'articulo', 'plan-docente']
            },
            {
              name: 'Repositorio de Planes Docentes',
              routerLink: ['/', 'articulo', 'repositorio-plan-docente']
            },
            {
              name: 'Recursos Digitales',
              routerLink: ['/', 'articulo', 'recursos-digitales-aplicados']
            },
            {
              name: 'Bases de Datos',
              goto: 'https://biblioteca.utpl.edu.ec/'
            },
            {
              name: 'Asesoramiento',
              routerLink: ['/', 'articulo', 'asesoramiento-pedagogico']
            }
          ]
        }
      ]
    },
    {
      name: 'Observatorio Edutendencias',
      children: [
        {
          name: 'Tips de Innovación',
          routerLink: ['/', 'tips-innovacion'],
          children: [
            {
              name: 'Aula Divertida',
              routerLink: ['/', 'tips-innovacion', 'aula-divertida']
            },
            {
              name: 'Docentes del Futuro',
              routerLink: ['/', 'tips-innovacion', 'docentes-futuro']
            },
            {
              name: 'Podcast',
              goto: 'https://www.ivoox.com/podcast-academia-utpl_sq_f1507318_1.html'
            },
            {
              name: 'Videos',
              routerLink: ['/', 'tips-innovacion', 'videos']
            }
          ]
        },
        {
          name: 'Noticias',
          routerLink: ['/', 'noticias']
        },

        {
          name: 'Docentes Ascenderes',
          goto: 'https://www.youtube.com/channel/UCzRd2Y87-NJnVliV8B6e_Xg'
        }
      ]
    }
  ];

  @ViewChild('mainNavbar') mainNavbarElement: ElementRef;

  constructor(private _router: Router) {}

  ngOnInit() {
    this._router.events.subscribe((event: Event) => {
      // user is navigating to new route
      if (event instanceof NavigationStart) {
        const el = this.mainNavbarElement.nativeElement as HTMLElement;

        if (el.classList.contains('active-navbar')) {
          el.classList.remove('active-navbar');
          return;
        }
      }
    });
  }

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
